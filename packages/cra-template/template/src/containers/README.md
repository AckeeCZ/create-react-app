# Global containers

Container components can be defined by these characteristics:

-   Provide the data (with selectors) and behavior to presentational or other container components.
-   Provide Redux action creators as callbacks to the presentational components.
-   May contain both presentational and container components inside. But container components usually don’t have any DOM markup of their own except for some wrapping divs, and never have any styles.
-   May be stateful, as they tend to serve as data sources.
-   Are usually generated using higher order components (e.g. connect() from React Redux).
-   Examples: _AddressForm, FollowersSidebar, StoryContainer, FollowedUserList_.

Source - ["Presentational and Container Components" by Dan Abramov](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
