import {HubConnectionBuilder, HubConnection} from '@microsoft/signalr';
import {store} from '@stores/index';
import {
  setConnectStatus,
  updateCommandContent,
  updateCommandStatus,
  addCommandToQueue,
} from '@stores/slices/commandSlice';

export interface AgentConfigurationParam {
  webHookConnectionString: string;
  agentName: string;
  webHookSecretKey: string;
}

const agentConfigurationParam: AgentConfigurationParam = {
  webHookConnectionString: 'https://devhub.gs25.com.vn/jobhub',
  webHookSecretKey: '2ef3ee31-ffd5-4bb1-9607-3659f18ea12c',
  agentName: 'mbopcenterx',
};

const testCommand = {
  id: '1',
  command: 'test',
  commandText: 'test_signalR',
  siteCode: '',
  agentName: 'regionagent',
};

interface IRunCommandParam {
  id: string;
  command: string;
  commandText: string;
  siteCode: string;
  agentName: string;
}

export class AgentBridge {
  private TASK_REPORT_LISTENER = 'TaskReport';
  private TASK_START_LISTENER = 'TaskStart';
  private TASK_FINALIZE_LISTENER = 'TaskFinalize';
  private requestId = '1';
  private connection!: HubConnection;

  constructor({requestId}: {requestId: string}) {
    this.requestId = requestId ?? '1';
  }

  public async start(
    config: AgentConfigurationParam = agentConfigurationParam,
  ) {
    await this.startWebHook(config);
  }

  public async runCommand({
    agentName,
    siteCode,
    commandText,
    command,
  }: IRunCommandParam) {
    await this.start();
    await this.request({
      id: this.requestId,
      agentName,
      siteCode,
      commandText,
      command,
    });
  }

  public async request(requestCommand = testCommand): Promise<any> {
    try {
      const requestStr = JSON.stringify({
        requestId: testCommand.id,
        agentReceiver: testCommand.agentName,
        siteCode: testCommand.siteCode,
        commandText: testCommand.commandText,
      });

      console.log('requestStr', requestStr);

      store.dispatch(addCommandToQueue(this.requestId));

      store.dispatch(
        updateCommandStatus({
          id: this.requestId,
          status: 'processing',
        }),
      );

      const response = await this.connection.invoke(
        'SendAgentRequest',
        testCommand.id,
        requestStr,
      );

      if (response && response.Status === 0) {
        console.log('response', response);
      }

      return response;
    } catch (error: any) {
      console.log('error', error);
    }
  }

  public async stop() {
    if (this.connection) {
      await this.connection.stop();
    }
  }

  private async startWebHook(config: AgentConfigurationParam) {
    try {
      store.dispatch(setConnectStatus('connecting'));
      const url = `${config.webHookConnectionString}?agentName=${config.agentName}`;
      console.log('url', url);
      this.connection = new HubConnectionBuilder()
        .withUrl(url, {
          headers: {
            'X-API-KEY': config.webHookSecretKey,
          },
        })
        .withAutomaticReconnect()
        .build();

      this.connection.on(
        this.TASK_REPORT_LISTENER,
        this.execTaskReportRequest.bind(this),
      );
      this.connection.on(
        this.TASK_START_LISTENER,
        this.execTaskStartRequest.bind(this),
      );
      this.connection.on(
        this.TASK_FINALIZE_LISTENER,
        this.execTaskFinalizeRequest.bind(this),
      );

      await this.connection.start();
      store.dispatch(setConnectStatus('connected'));
    } catch (error: any) {
      console.log('error', error);
      store.dispatch(setConnectStatus('disconnected'));
    }
  }

  private execTaskReportRequest(request: string) {
    store.dispatch(
      updateCommandContent({
        id: this.requestId,
        content: request,
      }),
    );
    console.log('execTaskReportRequest', request);
  }

  private execTaskStartRequest(request: string) {
    console.log('execTaskStartRequest', request);
  }

  private execTaskFinalizeRequest(request: string) {
    this.connection.stop();
    store.dispatch(
      updateCommandStatus({
        id: this.requestId,
        status: 'completed',
      }),
    );
    console.log('execTaskFinalizeRequest', request);
  }
}
