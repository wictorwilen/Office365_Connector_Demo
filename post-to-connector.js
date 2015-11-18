var request = require('request')

request({
	method: 'POST',
	uri: 'https://outlook.office365.com/webhook/.....',
	headers:{
		'content-type': 'application/json',
	},
	body: JSON.stringify({
		'title': 'New RFI added to CRM',
		'text': 'A new RFI from [Contoso](http://www.contoso.com) has arrivied',
		"sections": [
			{
			"activityTitle": "Office 365 Onboarding",
			"activitySubtitle": "Incoming RFI",
			"activityText": "This is a new RFI from Contoso ",
			"activityImage": "http://i.msdn.microsoft.com/dynimg/IC60554.gif",
			"facts": [
				{
					"name": "Customer",
					"value": "Contoso"
				},
				{
					"name": "Due date",
					"value": "2015-11-31"
				},
				{
					"name": "Attachments",
					"value": "[Contoso-RFI.docx](http://crm.fabrikam.com/dox/Contoso-RFI.docx)"
				},
				{
					"name":"Responsible",
					"value": "Garth Fort"
				}
			]
			}
		],
		"potentialAction":[{
			"@context": "http://schema.org",
      		"@type": "ViewAction",
      		"name": "Lookup Contoso in CRM",
      		"target": ["http://crm.fabrikam.com/customer/Contoso"]
		}],
		'themeColor':'#FF69B4'
	})
}, function(error, response, body){
	console.log(response.statusCode)
})