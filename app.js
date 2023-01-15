function isLoggedInAndSubscribed(bool1, bool2) {
    return (bool1 === 'LOGGED_IN') && (bool2 === 'SUBSCRIBED')
}

console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'))