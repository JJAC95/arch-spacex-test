# Extensibility

For extensibility, I created the project structure for repositories, I have a basic fetchWrapper (fetchData), that I would expand upon to be able to handle different status codes that could be returned. I also made the component that displays the returned data flexible to be able to return data regardless of different data types, the styling and breakpoints are a bit funky at the moment, but it could be explanded upon to create a table or a more effective way of displaying the data.

## Notes

If I had more time I'd extract creaton of the Accordion in DisplayData into a seperate component, I'd also extract the type validation function as well. I also chose and endpoint with an array of data as the return, and one with just a single object to show the flexibility of my application to be able to handle more than one situation. I may have taken some liberties when you said the css doesnt matter so much, but I thought it would be more useful to work on the functionality rather than just adding more bootstrap. I'm having issues with the page taking a while to render each time on reload, it seems to be caused by a network call taking a while to complete. I originally thought this was because it was re-fetching everytime I refocused on the window so I added a stale time of inifity and set refetchOnWindowFocus to false but the issue still persists.
