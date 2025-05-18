export type CommandStatus = 'pending' | 'processing' | 'completed' | 'failed';
export type Region = 'north' | 'south' | 'none' | 'all';
export type CommandGroupType =
  | 'region'
  | 'folder'
  | 'service'
  | 'report'
  | 'warehouse'
  | 'schedule'
  | 'agent';

export type CommandEntity = {
  id: string;
  name: string;
  description: string;
  status: CommandStatus;
  createdAt: string;
  content: string[];
  command?: string;
  commandText?: string;
  siteCode?: string;
  agentName?: string;
  childIds: string[];
  type?: CommandGroupType;
};
