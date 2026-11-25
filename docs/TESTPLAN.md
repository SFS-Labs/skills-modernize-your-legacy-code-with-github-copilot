# COBOL Accounting System Test Plan

Each case records the expected behavior of the legacy app before the Node.js conversion.

| Test Case ID | Test Case Description | Pre-conditions | Test Steps | Expected Result | Actual Result | Status | Comments |
| --- | --- | --- | --- | --- | --- | --- | --- |
| TC-001 | View an initial balance | Account data is loaded | Start the app, choose View Balance | The stored balance is displayed | Pending | Pending | Baseline read test |
| TC-002 | Credit an account | Account data is loaded | Start the app, choose Credit, enter 50.00 | Balance increases by 50.00 | Pending | Pending | Validates credit path |
| TC-003 | Debit an account | Account has sufficient funds | Start the app, choose Debit, enter 25.00 | Balance decreases by 25.00 | Pending | Pending | Validates debit path |
| TC-004 | Reject an invalid menu choice | App is running | Start the app and enter 9 | An error is shown and the menu returns | Pending | Pending | Validates input handling |
| TC-005 | Reject an overdraft | Account balance is below the requested debit | Start the app, choose Debit, enter an amount larger than the balance | The debit is rejected and the balance is unchanged | Pending | Pending | Protects account integrity |
