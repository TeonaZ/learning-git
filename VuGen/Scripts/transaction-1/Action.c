//   *****************************************************************************************************************************************
//   ****   PLEASE NOTE: This is a READ-ONLY representation of the actual script. For editing please press the "Develop Script" button.   ****
//   *****************************************************************************************************************************************

Action()
{
	truclient_step("1", "Navigate to 'http://127.0.0.1:1080/WebTours/index.htm'", "snapshot=Action_1.inf");
	lr_start_transaction("logon_process");
	truclient_step("2", "Click on Username textbox", "snapshot=Action_2.inf");
	truclient_step("3", "Type jojo in Username textbox", "snapshot=Action_3.inf");
	truclient_step("4", "Click on Password passwordbox", "snapshot=Action_4.inf");
	truclient_step("5", "Type **** in Password passwordbox", "snapshot=Action_5.inf");
	truclient_step("6", "Click on Login button", "snapshot=Action_6.inf");
	lr_end_transaction("logon_process",0);
	truclient_step("7", "Click on Search Flights Button image", "snapshot=Action_7.inf");
	truclient_step("8", "Select Frankfurt from Departure City listbox", "snapshot=Action_8.inf");
	truclient_step("9", "Select Zurich from Arrival City listbox", "snapshot=Action_9.inf");
	truclient_step("10", "Click on 02/05/2022 textbox", "snapshot=Action_10.inf");
	truclient_step("11", "Type 02/05/2024 in 02/05/2022 textbox", "snapshot=Action_11.inf");
	truclient_step("12", "Click on 02/06/2022 textbox", "snapshot=Action_12.inf");
	truclient_step("13", "Type 02/06/2027 in 02/06/2022 textbox", "snapshot=Action_13.inf");
	truclient_step("14", "Click on findFlights button", "snapshot=Action_14.inf");
	truclient_step("15", "Click on reserveFlights button", "snapshot=Action_15.inf");
	truclient_step("16", "Click on Street Address textbox", "snapshot=Action_16.inf");
	truclient_step("17", "Type 17 tire drive in Street Address textbox", "snapshot=Action_17.inf");
	truclient_step("18", "Click on City/State/Zip textbox", "snapshot=Action_18.inf");
	truclient_step("19", "Type 34678 in City/State/Zip textbox", "snapshot=Action_19.inf");
	truclient_step("20", "Click on Credit Card textbox", "snapshot=Action_20.inf");
	lr_start_transaction("CC_process");
	truclient_step("21", "Type 45678906 in Credit Card textbox", "snapshot=Action_21.inf");
	lr_end_transaction("CC_process",0);
	truclient_step("22", "Click on Exp Date textbox", "snapshot=Action_22.inf");
	truclient_step("23", "Type 765 in Exp Date textbox", "snapshot=Action_23.inf");
	truclient_step("24", "Click on buyFlights button", "snapshot=Action_24.inf");
	lr_start_transaction("logout_process");
	truclient_step("25", "Click on SignOff Button image", "snapshot=Action_25.inf");
	lr_end_transaction("logout_process",0);

	return 0;
}
