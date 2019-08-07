const capitalize = string =>
    string ? string[0].toUpperCase() + string.slice(1) : '';

const capitelizeReducer = (acc, item) => acc + capitalize(item);

module.exports = {
    helpers: {
        // user-profile -> UserProfile
        componentName: name =>
            name
                .split('-')
                .filter(Boolean)
                .reduce(capitelizeReducer, ''),
    },
};
