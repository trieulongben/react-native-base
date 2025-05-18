import {CommandEntity} from 'src/domain/entities/CommandEntity';

export interface MenuCommandDO {
  Id: string;
  Command: string;
  CommandText: string;
  SiteCode: string;
  AgentName: string;
}

export interface MenuDO {
  Id: string;
  Title: string;
  MenuType?:
    | 'region'
    | 'folder'
    | 'service'
    | 'report'
    | 'warehouse'
    | 'schedule'
    | 'agent';
  Expand?: boolean;
  ChildMenus?: MenuDO[];
  Command?: MenuCommandDO;
}

const generateGuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const MENU: MenuDO[] = [
  {
    Id: '1',
    Title: 'Manual Jobs',
    MenuType: 'service',
    Expand: true,
    ChildMenus: [
      {
        Id: '2',
        Title: 'Promotion Master',
        MenuType: 'folder',
        ChildMenus: [
          {
            Id: '3',
            Title: 'North',
            MenuType: 'region',
            ChildMenus: [],
          },
          {
            Id: '4',
            Title: 'South',
            MenuType: 'region',
            ChildMenus: [],
          },
        ],
      },
      {
        Id: '5',
        Title: 'Item Master',
        MenuType: 'folder',
        ChildMenus: [
          {
            Id: '6',
            Title: 'North',
            MenuType: 'region',
            ChildMenus: [],
          },
          {
            Id: '7',
            Title: 'South',
            MenuType: 'region',
            ChildMenus: [],
          },
        ],
      },
      {
        Id: '8',
        Title: 'Store Order',
        MenuType: 'folder',
        ChildMenus: [
          {
            Id: '9',
            Title: 'North',
            MenuType: 'region',
            ChildMenus: [
              {
                Id: '10',
                Title: 'Auto Order',
                Command: {
                  Id: generateGuid(),
                  Command: '',
                  CommandText: '',
                  SiteCode: 'North',
                  AgentName: '',
                },
              },
            ],
          },
          {
            Id: '11',
            Title: 'South',
            MenuType: 'region',
            ChildMenus: [],
          },
        ],
      },
      {
        Id: '12',
        Title: 'POS Region',
        MenuType: 'folder',
        ChildMenus: [
          {
            Id: '13',
            Title: 'Up Region',
            MenuType: 'folder',
            ChildMenus: [
              {
                Id: '14',
                Title: 'Settlement Sync to Master',
                Command: {
                  Id: generateGuid(),
                  Command: 'pos_dailylog',
                  CommandText: 'pos_dailylog $startDate',
                  SiteCode: '',
                  AgentName: 'posinterfaceregion',
                },
              },
            ],
          },
          {
            Id: '15',
            Title: 'Down Region',
            MenuType: 'folder',
            ChildMenus: [
              {
                Id: '16',
                Title: 'North',
                MenuType: 'region',
                ChildMenus: [
                  {
                    Id: '17',
                    Title: 'Item Generator',
                    Command: {
                      Id: generateGuid(),
                      Command: 'pos_prepareitem',
                      CommandText: 'pos_prepareitem true',
                      SiteCode: 'North',
                      AgentName: 'posdownregion',
                    },
                  },
                  {
                    Id: '18',
                    Title: 'Store Item Generator',
                    Command: {
                      Id: generateGuid(),
                      Command: 'pos_preparestoreitem',
                      CommandText: 'pos_preparestoreitem true $storeCode',
                      SiteCode: 'North',
                      AgentName: 'posdownregion',
                    },
                  },
                  {
                    Id: '19',
                    Title: 'Fresh Item Generator',
                    Command: {
                      Id: generateGuid(),
                      Command: 'pos_prepareitemff',
                      CommandText: 'pos_prepareitemff 1989-09-27',
                      SiteCode: 'North',
                      AgentName: 'posdownregion',
                    },
                  },
                  {
                    Id: '20',
                    Title: 'Promotion Generator',
                    Command: {
                      Id: generateGuid(),
                      Command: 'pos_preparepromotion',
                      CommandText: 'pos_preparepromotion true',
                      SiteCode: 'North',
                      AgentName: 'posdownregion',
                    },
                  },
                  {
                    Id: '21',
                    Title: 'Promotion Partner Generator',
                    Command: {
                      Id: generateGuid(),
                      Command: 'pos_preparepromopayment',
                      CommandText: 'pos_preparepromopayment',
                      SiteCode: 'North',
                      AgentName: 'posdownregion',
                    },
                  },
                  {
                    Id: '22',
                    Title: 'Division Replica',
                    Command: {
                      Id: generateGuid(),
                      Command: 'sqlmongoreplchanged divisionrepl',
                      CommandText:
                        'sqlmongoreplchanged divisionrepl 1989-09-27',
                      SiteCode: 'North',
                      AgentName: 'posdownregion',
                    },
                  },
                  {
                    Id: '23',
                    Title: 'Category Replica',
                    Command: {
                      Id: generateGuid(),
                      Command: 'sqlmongoreplchanged categoryrepl',
                      CommandText:
                        'sqlmongoreplchanged categoryrepl 1989-09-27',
                      SiteCode: 'North',
                      AgentName: 'posdownregion',
                    },
                  },
                  {
                    Id: '24',
                    Title: 'SubCategory Replica',
                    Command: {
                      Id: generateGuid(),
                      Command: 'sqlmongoreplchanged subcategoryrepl',
                      CommandText:
                        'sqlmongoreplchanged subcategoryrepl 1989-09-27',
                      SiteCode: 'North',
                      AgentName: 'posdownregion',
                    },
                  },
                ],
              },
              {
                Id: '25',
                Title: 'South',
                MenuType: 'region',
                ChildMenus: [
                  {
                    Id: '26',
                    Title: 'Item Generator',
                    Command: {
                      Id: generateGuid(),
                      Command: 'pos_prepareitem',
                      CommandText: 'pos_prepareitem true',
                      SiteCode: 'South',
                      AgentName: 'posdownregion',
                    },
                  },
                  {
                    Id: '27',
                    Title: 'Store Item Generator',
                    Command: {
                      Id: generateGuid(),
                      Command: 'pos_preparestoreitem',
                      CommandText: 'pos_preparestoreitem true $storeCode',
                      SiteCode: 'South',
                      AgentName: 'posdownregion',
                    },
                  },
                  {
                    Id: '28',
                    Title: 'Fresh Item Generator',
                    Command: {
                      Id: generateGuid(),
                      Command: 'pos_prepareitemff',
                      CommandText: 'pos_prepareitemff 1989-09-27',
                      SiteCode: 'South',
                      AgentName: 'posdownregion',
                    },
                  },
                  {
                    Id: '29',
                    Title: 'Promotion Generator',
                    Command: {
                      Id: generateGuid(),
                      Command: 'pos_preparepromotion',
                      CommandText: 'pos_preparepromotion true',
                      SiteCode: 'South',
                      AgentName: 'posdownregion',
                    },
                  },
                  {
                    Id: '30',
                    Title: 'Promotion Partner Generator',
                    Command: {
                      Id: generateGuid(),
                      Command: 'pos_preparepromopayment',
                      CommandText: 'pos_preparepromopayment',
                      SiteCode: 'South',
                      AgentName: 'posdownregion',
                    },
                  },
                  {
                    Id: '31',
                    Title: 'Division Replica',
                    Command: {
                      Id: generateGuid(),
                      Command: 'sqlmongoreplchanged divisionrepl',
                      CommandText:
                        'sqlmongoreplchanged divisionrepl 1989-09-27',
                      SiteCode: 'South',
                      AgentName: 'posdownregion',
                    },
                  },
                  {
                    Id: '32',
                    Title: 'Category Replica',
                    Command: {
                      Id: generateGuid(),
                      Command: 'sqlmongoreplchanged categoryrepl',
                      CommandText:
                        'sqlmongoreplchanged categoryrepl 1989-09-27',
                      SiteCode: 'South',
                      AgentName: 'posdownregion',
                    },
                  },
                  {
                    Id: '33',
                    Title: 'SubCategory Replica',
                    Command: {
                      Id: generateGuid(),
                      Command: 'sqlmongoreplchanged subcategoryrepl',
                      CommandText:
                        'sqlmongoreplchanged subcategoryrepl 1989-09-27',
                      SiteCode: 'South',
                      AgentName: 'posdownregion',
                    },
                  },
                ],
              },
              {
                Id: '34',
                Title: 'No-Region',
                MenuType: 'region',
                ChildMenus: [
                  {
                    Id: '35',
                    Title: 'Staff Replica',
                    Command: {
                      Id: generateGuid(),
                      Command: 'sqlmongoreplchanged staffrepl',
                      CommandText: 'sqlmongoreplchanged staffrepl 1989-09-27',
                      SiteCode: '',
                      AgentName: 'posdownregion',
                    },
                  },
                  {
                    Id: '36',
                    Title: 'Payment Method Replica',
                    Command: {
                      Id: generateGuid(),
                      Command: 'sqlmongoreplchanged paymentmethodrepl',
                      CommandText:
                        'sqlmongoreplchanged paymentmethodrepl 1989-09-27',
                      SiteCode: '',
                      AgentName: 'posdownregion',
                    },
                  },
                  {
                    Id: '37',
                    Title: 'Store Replica',
                    Command: {
                      Id: generateGuid(),
                      Command: 'sqlmongoreplchanged storerepl',
                      CommandText: 'sqlmongoreplchanged storerepl 1989-09-27',
                      SiteCode: '',
                      AgentName: 'posdownregion',
                    },
                  },
                  {
                    Id: '38',
                    Title: 'Counter Replica',
                    Command: {
                      Id: generateGuid(),
                      Command: 'sqlmongoreplchanged counterrepl',
                      CommandText: 'sqlmongoreplchanged counterrepl 1989-09-27',
                      SiteCode: '',
                      AgentName: 'posdownregion',
                    },
                  },
                  {
                    Id: '39',
                    Title: 'Device Replica',
                    Command: {
                      Id: generateGuid(),
                      Command: 'sqlmongoreplchanged terminalrepl',
                      CommandText:
                        'sqlmongoreplchanged terminalrepl 1989-09-27',
                      SiteCode: '',
                      AgentName: 'posdownregion',
                    },
                  },
                  {
                    Id: '40',
                    Title: 'Store ENV Replica',
                    Command: {
                      Id: generateGuid(),
                      Command: 'sqlmongoreplchanged storeenvrepl',
                      CommandText:
                        'sqlmongoreplchanged storeenvrepl 1989-09-27',
                      SiteCode: '',
                      AgentName: 'posdownregion',
                    },
                  },
                  {
                    Id: '41',
                    Title: 'Site ENV Replica',
                    Command: {
                      Id: generateGuid(),
                      Command: 'sqlmongoreplchanged siteenvrepl',
                      CommandText: 'sqlmongoreplchanged siteenvrepl 1989-09-27',
                      SiteCode: '',
                      AgentName: 'posdownregion',
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        Id: '42',
        Title: 'Selfcheckout Region',
        MenuType: 'folder',
        ChildMenus: [
          {
            Id: '43',
            Title: 'Down Region',
            MenuType: 'folder',
            ChildMenus: [
              {
                Id: '44',
                Title: 'North',
                MenuType: 'region',
                ChildMenus: [
                  {
                    Id: '45',
                    Title: 'Item Generator',
                    Command: {
                      Id: generateGuid(),
                      Command: 'selfcheckout_prepareitem',
                      CommandText: 'selfcheckout_prepareitem 1989-09-27',
                      SiteCode: 'North',
                      AgentName: 'posdownregion',
                    },
                  },
                  {
                    Id: '46',
                    Title: 'Store Item Generator',
                    Command: {
                      Id: generateGuid(),
                      Command: 'selfcheckout_preparestoreitem',
                      CommandText:
                        'selfcheckout_preparestoreitem 1989-09-27 true $storeCode',
                      SiteCode: 'North',
                      AgentName: 'posdownregion',
                    },
                  },
                  {
                    Id: '47',
                    Title: 'Fresh Item Generator',
                    Command: {
                      Id: generateGuid(),
                      Command: 'selfcheckout_prepareitemff',
                      CommandText: 'selfcheckout_prepareitemff 1989-09-27',
                      SiteCode: 'North',
                      AgentName: 'posdownregion',
                    },
                  },
                  {
                    Id: '48',
                    Title: 'Promotion Generator',
                    Command: {
                      Id: generateGuid(),
                      Command: 'selfcheckout_preparepromotion',
                      CommandText: 'selfcheckout_preparepromotion true',
                      SiteCode: 'North',
                      AgentName: 'posdownregion',
                    },
                  },
                ],
              },
              {
                Id: '49',
                Title: 'South',
                MenuType: 'region',
                ChildMenus: [
                  {
                    Id: '50',
                    Title: 'Item Generator',
                    Command: {
                      Id: generateGuid(),
                      Command: 'selfcheckout_prepareitem',
                      CommandText: 'selfcheckout_prepareitem 1989-09-27',
                      SiteCode: 'South',
                      AgentName: 'posdownregion',
                    },
                  },
                  {
                    Id: '51',
                    Title: 'Store Item Generator',
                    Command: {
                      Id: generateGuid(),
                      Command: 'selfcheckout_preparestoreitem',
                      CommandText:
                        'selfcheckout_preparestoreitem 1989-09-27 true $storeCode',
                      SiteCode: 'South',
                      AgentName: 'posdownregion',
                    },
                  },
                  {
                    Id: '52',
                    Title: 'Fresh Item Generator',
                    Command: {
                      Id: generateGuid(),
                      Command: 'selfcheckout_prepareitemff',
                      CommandText: 'selfcheckout_prepareitemff 1989-09-27',
                      SiteCode: 'South',
                      AgentName: 'posdownregion',
                    },
                  },
                  {
                    Id: '53',
                    Title: 'Promotion Generator',
                    Command: {
                      Id: generateGuid(),
                      Command: 'selfcheckout_preparepromotion',
                      CommandText: 'selfcheckout_preparepromotion true',
                      SiteCode: 'South',
                      AgentName: 'posdownregion',
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        Id: '54',
        Title: 'QueueOrder Region',
        MenuType: 'folder',
        ChildMenus: [
          {
            Id: '55',
            Title: 'Down Region',
            MenuType: 'folder',
            ChildMenus: [
              {
                Id: '56',
                Title: 'North',
                MenuType: 'region',
                ChildMenus: [
                  {
                    Id: '57',
                    Title: 'Category Generator',
                    Command: {
                      Id: generateGuid(),
                      Command: 'queueorder_preparecategory',
                      CommandText:
                        'queueorder_preparecategory 1989-09-27 true $storeCode',
                      SiteCode: 'North',
                      AgentName: 'posinterfaceregion',
                    },
                  },
                  {
                    Id: '58',
                    Title: 'Item Generator',
                    Command: {
                      Id: generateGuid(),
                      Command: 'queueorder_prepareitem',
                      CommandText:
                        'queueorder_prepareitem 1989-09-27 true $storeCode',
                      SiteCode: 'North',
                      AgentName: 'posinterfaceregion',
                    },
                  },
                  {
                    Id: '59',
                    Title: 'Store Item Generator',
                    Command: {
                      Id: generateGuid(),
                      Command: 'queueorder_preparestoreitem',
                      CommandText:
                        'queueorder_preparestoreitem 1989-09-27 true $storeCode',
                      SiteCode: 'North',
                      AgentName: 'posinterfaceregion',
                    },
                  },
                  {
                    Id: '60',
                    Title: 'Promotion Generator',
                    Command: {
                      Id: generateGuid(),
                      Command: 'queueorder_preparepromotion',
                      CommandText:
                        'queueorder_preparepromotion 1989-09-27 true $storeCode',
                      SiteCode: 'North',
                      AgentName: 'posinterfaceregion',
                    },
                  },
                ],
              },
              {
                Id: '61',
                Title: 'South',
                MenuType: 'region',
                ChildMenus: [
                  {
                    Id: '62',
                    Title: 'Category Generator',
                    Command: {
                      Id: generateGuid(),
                      Command: 'queueorder_preparecategory',
                      CommandText:
                        'queueorder_preparecategory 1989-09-27 true $storeCode',
                      SiteCode: 'South',
                      AgentName: 'posinterfaceregion',
                    },
                  },
                  {
                    Id: '63',
                    Title: 'Item Generator',
                    Command: {
                      Id: generateGuid(),
                      Command: 'queueorder_prepareitem',
                      CommandText:
                        'queueorder_prepareitem 1989-09-27 true $storeCode',
                      SiteCode: 'South',
                      AgentName: 'posinterfaceregion',
                    },
                  },
                  {
                    Id: '64',
                    Title: 'Store Item Generator',
                    Command: {
                      Id: generateGuid(),
                      Command: 'queueorder_preparestoreitem',
                      CommandText:
                        'queueorder_preparestoreitem 1989-09-27 true $storeCode',
                      SiteCode: 'South',
                      AgentName: 'posinterfaceregion',
                    },
                  },
                  {
                    Id: '65',
                    Title: 'Promotion Generator',
                    Command: {
                      Id: generateGuid(),
                      Command: 'queueorder_preparepromotion',
                      CommandText:
                        'queueorder_preparepromotion 1989-09-27 true $storeCode',
                      SiteCode: 'South',
                      AgentName: 'posinterfaceregion',
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        Id: '66',
        Title: 'Inventory Region',
        MenuType: 'folder',
        ChildMenus: [
          {
            Id: '67',
            Title: 'North',
            MenuType: 'region',
            ChildMenus: [
              {
                Id: '68',
                Title: 'Open Stock',
                Command: {
                  Id: generateGuid(),
                  Command: 'inventorystockinmonth',
                  CommandText: 'inventorystockinmonth openstock $startDate',
                  SiteCode: 'North',
                  AgentName: 'ope2_north',
                },
              },
              {
                Id: '69',
                Title: 'Open Stock Value',
                Command: {
                  Id: generateGuid(),
                  Command: 'inventorystockinmonth',
                  CommandText:
                    'inventorystockinmonth openstockvalue $startDate',
                  SiteCode: 'North',
                  AgentName: 'ope2_north',
                },
              },
              {
                Id: '70',
                Title: 'Stocktake result',
                Command: {
                  Id: generateGuid(),
                  Command: 'inventorystockinmonth',
                  CommandText: 'inventorystockinmonth stocktake $startDate',
                  SiteCode: 'North',
                  AgentName: 'ope2_north',
                },
              },
              {
                Id: '71',
                Title: 'Transaction',
                Command: {
                  Id: generateGuid(),
                  Command: '',
                  CommandText: '',
                  SiteCode: 'North',
                  AgentName: 'ope2_north',
                },
              },
              {
                Id: '72',
                Title: 'Inventory closing',
                Command: {
                  Id: generateGuid(),
                  Command: 'inventoryclosing',
                  CommandText: 'inventoryclosing $startDate',
                  SiteCode: 'North',
                  AgentName: 'ope2_north',
                },
              },
              {
                Id: '73',
                Title: 'Clean junk data',
                Command: {
                  Id: generateGuid(),
                  Command: 'inventorystockinmonth',
                  CommandText:
                    'inventorystockinmonth cleaninventory $startDate',
                  SiteCode: 'North',
                  AgentName: 'ope2_north',
                },
              },
              {
                Id: '74',
                Title: 'SOH Summary by Store',
                Command: {
                  Id: generateGuid(),
                  Command: 'inventory_updatestockcategorycurrent',
                  CommandText: 'inventory_updatestockcategorycurrent',
                  SiteCode: 'North',
                  AgentName: 'region1_north',
                },
              },
              {
                Id: '75',
                Title: 'SOH Summary by Warehouse',
                Command: {
                  Id: generateGuid(),
                  Command: 'inventory_updatestockcategorycurrentsummary',
                  CommandText: 'inventory_updatestockcategorycurrentsummary',
                  SiteCode: 'North',
                  AgentName: 'region1_north',
                },
              },
            ],
          },
          {
            Id: '76',
            Title: 'South',
            MenuType: 'region',
            ChildMenus: [
              {
                Id: '77',
                Title: 'Open Stock',
                Command: {
                  Id: generateGuid(),
                  Command: 'inventorystockinmonth',
                  CommandText: 'inventorystockinmonth openstock $startDate',
                  SiteCode: 'South',
                  AgentName: 'ope1_south',
                },
              },
              {
                Id: '78',
                Title: 'Open Stock Value',
                Command: {
                  Id: generateGuid(),
                  Command: 'inventorystockinmonth',
                  CommandText:
                    'inventorystockinmonth openstockvalue $startDate',
                  SiteCode: 'South',
                  AgentName: 'ope1_south',
                },
              },
              {
                Id: '79',
                Title: 'Stocktake result',
                Command: {
                  Id: generateGuid(),
                  Command: 'inventorystockinmonth',
                  CommandText: 'inventorystockinmonth stocktake $startDate',
                  SiteCode: 'South',
                  AgentName: 'ope1_south',
                },
              },
              {
                Id: '80',
                Title: 'Transaction',
                Command: {
                  Id: generateGuid(),
                  Command: '',
                  CommandText: '',
                  SiteCode: 'South',
                  AgentName: 'ope1_south',
                },
              },
              {
                Id: '81',
                Title: 'Inventory closing',
                Command: {
                  Id: generateGuid(),
                  Command: 'inventoryclosing',
                  CommandText: 'inventoryclosing $startDate',
                  SiteCode: 'South',
                  AgentName: 'ope1_south',
                },
              },
              {
                Id: '82',
                Title: 'Clean junk data',
                Command: {
                  Id: generateGuid(),
                  Command: 'inventorystockinmonth',
                  CommandText:
                    'inventorystockinmonth cleaninventory $startDate',
                  SiteCode: 'South',
                  AgentName: 'ope1_south',
                },
              },
              {
                Id: '83',
                Title: 'SOH Summary by Store',
                Command: {
                  Id: generateGuid(),
                  Command: 'inventory_updatestockcategorycurrent',
                  CommandText: 'inventory_updatestockcategorycurrent',
                  SiteCode: 'South',
                  AgentName: 'region2_south',
                },
              },
              {
                Id: '84',
                Title: 'SOH Summary by Warehouse',
                Command: {
                  Id: generateGuid(),
                  Command: 'inventory_updatestockcategorycurrentsummary',
                  CommandText: 'inventory_updatestockcategorycurrentsummary',
                  SiteCode: 'South',
                  AgentName: 'region2_south',
                },
              },
            ],
          },
        ],
      },
      {
        Id: '85',
        Title: 'Other Services',
        MenuType: 'folder',
        ChildMenus: [
          {
            Id: '86',
            Title: 'North',
            MenuType: 'region',
            ChildMenus: [],
          },
          {
            Id: '87',
            Title: 'South',
            MenuType: 'region',
            ChildMenus: [],
          },
        ],
      },
      {
        Id: '88',
        Title: 'Inventory Report',
        MenuType: 'report',
        ChildMenus: [
          {
            Id: '89',
            Title: 'North',
            MenuType: 'region',
            ChildMenus: [
              {
                Id: '90',
                Title: 'Operation Inventory',
                Command: {
                  Id: generateGuid(),
                  Command: 'inventoryoperation',
                  CommandText: 'inventoryoperation $startDate',
                  SiteCode: 'North',
                  AgentName: 'reportop_north',
                },
              },
              {
                Id: '91',
                Title: 'Inventory Movement History',
                Command: {
                  Id: generateGuid(),
                  Command: 'inventorystockmovementhistory',
                  CommandText: '',
                  SiteCode: 'North',
                  AgentName: 'reportop_north',
                },
              },
            ],
          },
          {
            Id: '92',
            Title: 'South',
            MenuType: 'region',
            ChildMenus: [
              {
                Id: '93',
                Title: 'Operation Inventory',
                Command: {
                  Id: generateGuid(),
                  Command: 'inventoryoperation',
                  CommandText: 'inventoryoperation $startDate',
                  SiteCode: 'South',
                  AgentName: 'reportop_south',
                },
              },
              {
                Id: '94',
                Title: 'Inventory Movement History',
                Command: {
                  Id: generateGuid(),
                  Command: 'inventorystockmovementhistory',
                  CommandText: '',
                  SiteCode: 'South',
                  AgentName: 'reportop_south',
                },
              },
            ],
          },
        ],
      },
      {
        Id: '95',
        Title: 'Sales Report',
        MenuType: 'report',
        ChildMenus: [
          {
            Id: '96',
            Title: 'North',
            MenuType: 'region',
            ChildMenus: [
              {
                Id: '97',
                Title: 'Daily Sales',
                Command: {
                  Id: generateGuid(),
                  Command: 'sale',
                  CommandText: '',
                  SiteCode: 'North',
                  AgentName: 'reportop_north',
                },
              },
              {
                Id: '98',
                Title: 'Reconciliation',
                Command: {
                  Id: generateGuid(),
                  Command: 'salecompare',
                  CommandText: '',
                  SiteCode: 'North',
                  AgentName: 'reportop_north',
                },
              },
            ],
          },
          {
            Id: '99',
            Title: 'South',
            MenuType: 'region',
            ChildMenus: [
              {
                Id: '100',
                Title: 'Daily Sales',
                Command: {
                  Id: generateGuid(),
                  Command: 'sale',
                  CommandText: '',
                  SiteCode: 'South',
                  AgentName: 'reportop_south',
                },
              },
              {
                Id: '101',
                Title: 'Reconciliation',
                Command: {
                  Id: generateGuid(),
                  Command: 'salecompare',
                  CommandText: '',
                  SiteCode: 'South',
                  AgentName: 'reportop_south',
                },
              },
            ],
          },
        ],
      },
      {
        Id: '102',
        Title: 'Service Report',
        MenuType: 'report',
        ChildMenus: [
          {
            Id: '103',
            Title: 'North',
            MenuType: 'region',
            ChildMenus: [
              {
                Id: '104',
                Title: 'CICO',
                Command: {
                  Id: generateGuid(),
                  Command: 'cico',
                  CommandText: '',
                  SiteCode: 'North',
                  AgentName: 'reportop_north',
                },
              },
              {
                Id: '105',
                Title: 'EVoucher Payment',
                Command: {
                  Id: generateGuid(),
                  Command: 'evoucher_payment',
                  CommandText: '',
                  SiteCode: 'North',
                  AgentName: 'reportop_north',
                },
              },
            ],
          },
          {
            Id: '106',
            Title: 'South',
            MenuType: 'region',
            ChildMenus: [
              {
                Id: '107',
                Title: 'CICO',
                Command: {
                  Id: generateGuid(),
                  Command: 'cico',
                  CommandText: '',
                  SiteCode: 'South',
                  AgentName: 'reportop_south',
                },
              },
              {
                Id: '108',
                Title: 'EVoucher Payment',
                Command: {
                  Id: generateGuid(),
                  Command: 'evoucher_payment',
                  CommandText: '',
                  SiteCode: 'South',
                  AgentName: 'reportop_north',
                },
              },
            ],
          },
          {
            Id: '109',
            Title: 'No-Region',
            MenuType: 'region',
            ChildMenus: [
              {
                Id: '110',
                Title: 'EVoucher',
                Command: {
                  Id: generateGuid(),
                  Command: 'evoucher',
                  CommandText: '',
                  SiteCode: 'South',
                  AgentName: 'reportop_south',
                },
              },
              {
                Id: '111',
                Title: 'GIFTCARD',
                Command: {
                  Id: generateGuid(),
                  Command: 'evoucher_card',
                  CommandText: '',
                  SiteCode: 'South',
                  AgentName: 'reportop_south',
                },
              },
              {
                Id: '112',
                Title: 'EVoucher Campaign',
                Command: {
                  Id: generateGuid(),
                  Command: 'evoucher_campaign',
                  CommandText: '',
                  SiteCode: 'South',
                  AgentName: 'reportop_south',
                },
              },
            ],
          },
        ],
      },
      {
        Id: '113',
        Title: 'Loyalty Report',
        MenuType: 'report',
        ChildMenus: [
          {
            Id: '114',
            Title: 'Profile & Transaction',
            Command: {
              Id: generateGuid(),
              Command: 'loyalty',
              CommandText: 'loyalty',
              SiteCode: '',
              AgentName: 'reportop_south',
            },
          },
        ],
      },
      {
        Id: '115',
        Title: 'Promotion Report',
        MenuType: 'report',
        ChildMenus: [
          {
            Id: '116',
            Title: 'North',
            MenuType: 'region',
            ChildMenus: [
              {
                Id: '117',
                Title: 'Information',
                Command: {
                  Id: generateGuid(),
                  Command: 'promotioninfor',
                  CommandText: '',
                  SiteCode: 'North',
                  AgentName: 'reportop_north',
                },
              },
              {
                Id: '118',
                Title: 'Transaction',
                Command: {
                  Id: generateGuid(),
                  Command: 'promotiontransaction',
                  CommandText: '',
                  SiteCode: 'North',
                  AgentName: 'reportop_north',
                },
              },
            ],
          },
          {
            Id: '119',
            Title: 'South',
            MenuType: 'region',
            ChildMenus: [
              {
                Id: '120',
                Title: 'Information',
                Command: {
                  Id: generateGuid(),
                  Command: 'promotioninfor',
                  CommandText: '',
                  SiteCode: 'South',
                  AgentName: 'reportop_south',
                },
              },
              {
                Id: '121',
                Title: 'Transaction',
                Command: {
                  Id: generateGuid(),
                  Command: 'promotiontransaction',
                  CommandText: '',
                  SiteCode: 'South',
                  AgentName: 'reportop_south',
                },
              },
            ],
          },
        ],
      },
      {
        Id: '122',
        Title: 'Data Warehouse',
        MenuType: 'warehouse',
        ChildMenus: [
          {
            Id: '123',
            Title: 'North',
            MenuType: 'region',
            ChildMenus: [
              {
                Id: '124',
                Title: 'Data Dimension',
                Command: {
                  Id: generateGuid(),
                  Command: '',
                  CommandText: '',
                  SiteCode: 'North',
                  AgentName: 'reportopagent',
                },
              },
              {
                Id: '125',
                Title: 'Transaction',
                Command: {
                  Id: generateGuid(),
                  Command: '',
                  CommandText: '',
                  SiteCode: 'North',
                  AgentName: 'reportopagent',
                },
              },
            ],
          },
          {
            Id: '126',
            Title: 'South',
            MenuType: 'region',
            ChildMenus: [
              {
                Id: '127',
                Title: 'Data Dimension',
                Command: {
                  Id: generateGuid(),
                  Command: '',
                  CommandText: '',
                  SiteCode: 'South',
                  AgentName: 'reportopagent',
                },
              },
              {
                Id: '128',
                Title: 'Transaction',
                Command: {
                  Id: generateGuid(),
                  Command: '',
                  CommandText: '',
                  SiteCode: 'South',
                  AgentName: 'reportopagent',
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    Id: '129',
    Title: 'Scheduled Jobs',
    MenuType: 'schedule',
  },
  {
    Id: '130',
    Title: 'Agents',
    MenuType: 'agent',
  },
];

function flattenMenu(
  menu: MenuDO,
  map: Record<string, CommandEntity> = {},
): Record<string, CommandEntity> {
  const flattenedSubMenuIds: string[] = [];

  menu?.ChildMenus?.forEach((subMenu: MenuDO) => {
    const flattened = flattenMenu(subMenu, map);
    Object.assign(map, flattened);
    flattenedSubMenuIds.push(subMenu.Id);
  });

  map[menu.Id] = {
    id: menu.Id,
    name: menu.Title,
    description: menu.Title,
    status: 'pending',
    childIds: [...flattenedSubMenuIds],
    createdAt: new Date().toISOString(),
    content: [],
    type: menu.MenuType,
    command: menu.Command?.Command,
    commandText: menu.Command?.CommandText,
    siteCode: menu.Command?.SiteCode,
    agentName: menu.Command?.AgentName,
  };

  return map;
}

const runFlattenMenu = () => {
  const flattenedMenu: Record<string, CommandEntity> = {};
  MENU.forEach(menu => flattenMenu(menu, flattenedMenu));
  return flattenedMenu;
};

const flattenedMenu = runFlattenMenu();
const flattenedMenuIds = Object.keys(flattenedMenu);

export default {flattenedMenu, flattenedMenuIds};
