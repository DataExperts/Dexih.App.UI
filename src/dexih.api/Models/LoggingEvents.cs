﻿namespace dexih.api
{
	public class LoggingEvents
	{
		public const int AddRemoteAgent = 1000;
		public const int DisconnectRemoteAgent = 1001;
		public const int AddRemoteWebsocket = 1002;
		public const int BroadcastHubMessage = 1003;
		public const int RemoveBrowserSocket = 1004;
		public const int GetRemoteAgents = 1005;
		public const int GetRemoteAgent = 1006;
		public const int GetHubReaderRemoteAgent = 1007;
		public const int GetRemoteAgentFromSecurityToken = 1008;
		public const int GetRemoteAgentFromId = 1009;
		public const int RemoteEncrypt = 1010;
		public const int RemoteDecrypt = 1011;
		public const int RemoteSaveFile = 1012;
		public const int PreviewTable = 1013;
		public const int ConnectBrowserHub = 1014;
        public const int DownloadData = 1015;
        public const int DisconnectBrowserHub = 1016;
		public const int RunDatalinks = 1017;
		public const int RunDatajobs = 1018;
		public const int ActivateDatajobs = 1019;
		public const int DeactivateDatajobs = 1020;
		public const int ClearTables = 1021;
        public const int CancelDatalinks = 1022;
        public const int CancelDatajobs = 1023;
        public const int DownloadFiles = 1024;
		public const int PreviewDatalink = 1025;
		public const int CancelTasks = 1026;
        public const int BroadcastClientMessage = 1027;
		public const int GetRemoteStream = 1028;
		public const int RunDatalinkTests = 1029;
		public const int CancelDatalinkTests = 1030;
		public const int SnapshotDatalinkTests = 1031;
		public const int ActivateApis = 1032;
		public const int DeactivateApis = 1033;
		public const int DatalinkProperties = 1034;
		public const int PreviewAuditResults = 1035;

        public const int SocketRemoteAgentNew = 2000;
		public const int SocketRemoteAgentStart = 2001;
		public const int SocketRemoteAgentSendPing = 2002;
		public const int SocketRemoteAgentSendMessage = 2003;
		public const int SocketRemoteAgentSendResponse = 2004;
		public const int SocketRemoteAgentSend = 2005;
		public const int SocketRemoteAgentGetMessage = 2006;
		public const int SocketRemoteAgentGetResponse = 2007;
		public const int SocketRemoteUpdateResponseMessage = 2008;
		public const int SocketRemoteSetFileStream = 2009;
		public const int SocketRemoteGetFileStream = 20010;
		public const int SocketRemoteDispose = 2011;

		public const int SocketBrowserNew = 3000;
		public const int SocketBrowserStart = 3001;
		public const int SocketBrowserSendClientMessage = 3002;
		public const int SocketBrowserSendPing = 3003;

		public const int HubOnaction = 4000;
		public const int HubGetHubCache = 4001;
		public const int HubGetHubEncryptionKey = 4002;
		public const int HubRunRemoteCommand = 4003;
		public const int HubDecrypt = 4004;
		public const int HubSaveConnection = 4005;
		public const int HubDeleteConnections = 4006;
		public const int HubImportTables = 4007;
		public const int HubImportFileFormat = 4008;
		public const int HubSaveTable = 4009;
		public const int HubDeleteTables = 4010;
		public const int HubCreateDatalinks = 4011;
		public const int HubDeleteDatalinks = 4012;
		public const int HubSaveDatalink = 4013;
		public const int HubDeleteDatajobs = 4014;
		public const int HubSaveDatajob = 4015;
		public const int HubDeleteValidations = 4016;
		public const int HubSaveValidation = 4017;
		public const int HubDeleteFileformats = 4018;
		public const int HubSaveFileformat = 4019;
		public const int HubUploadFiles = 4020;
		public const int HubPreviewTable = 4021;
		public const int HubUpdateBrowserHub = 4022;
		public const int HubRunDatalinks = 4023;
		public const int HubRunDatajobs = 4024;
		public const int HubActivateDatajobs = 4025;
		public const int HubDeactivateDatajobs = 4026;
		public const int HubClearTables = 4027;
		public const int HubPreviewDatalink = 4028;
        public const int HubShareItems = 4030;
        public const int HubCreateTables = 4031;
        public const int HubSaveHubVariable = 4032;
        public const int HubDeleteHubVariables = 4033;
		public const int HubImportPlan = 4034;
		public const int HubImportPackage = 4035;
		public const int HubDeleteCustomFunctions = 4036;
		public const int HubSaveCustomFunctions = 4037;
		public const int HubDeleteDatalinkTests = 4038;
		public const int HubSaveDatalinkTests = 4039;
		public const int HubNewDatalinkTest = 4040;
		public const int HubRunDatalinkTests = 4041;
		public const int HubCancelDatalinkTests = 4042;
		public const int HubSnapshotDatalinkTests = 4043;
		public const int HubDeleteViews = 4044;
		public const int HubSaveViews = 4045;
		public const int HubPreviewView = 4046;
		public const int HubDeleteApis = 4047;
		public const int HubSaveApis = 4048;
		public const int HubStartApis = 4049;
		public const int HubStopApis = 4050;
		public const int HubActivateApis = 4051;
		public const int HubDeactivateApis = 4052;
		public const int HubRestartAgent = 4053;
		public const int HubBulkUploadFiles = 4054;
		public const int HubDeleteDashboards = 4055;
		public const int HubSaveDashboards = 4056;
		public const int HubImportFunctionMappings = 4057;
		public const int HubEncrypt = 4058;
	

        public const int RemoteLogin = 5000;

	}
}
