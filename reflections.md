 Why was it important to re-format the data from the Useless Facts API before sending it to your own client? What are the benefits of an API providing a clean, minimal response?
   It is important because we do not need information like source_url and permalink, removing this information means our api will provide only relevant information to the user.
 In the catch block, why is it better to send a generic error message to the client instead of the actual error object from axios?
   The error object is usually 'too much' ifno to show and a clear/consice error is easier to read/process.
 How might you modify this application to get a fact in a different language if the external API supported it (e.g., with a query parameter like ?language=de)?
   You could add an optional parameter to the url (ex. :language).