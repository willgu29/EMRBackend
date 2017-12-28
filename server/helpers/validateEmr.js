/* NOTE TO CODER:

Previously we stored files in GCS and I had implemented a checker here since
Drew was adding data directly to the database but since it happened in steps
(EMR --> Proxy previously, it is now Template --> Find) there was the chance
that some piece would be lost. i.e. he creates an Template with a Find (Proxy).

I would highly recommend re-implementing a checker and inserting it in the
GET methods for finds.js/templates.js to prevent the server from populating
the search bar with "finds" that have no "templates".

Therefore, I have left this file here, although it is not in use anywhere. */
