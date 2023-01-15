function isLoggedInOrSubscribed(bool1, bool2) {
    return (bool1 === 'LOGGED_IN') || (bool2 === 'SUBSCRIBED')
}

console.log(isLoggedInOrSubscribed('LOGGED_OUT', 'UNSUBSCRIBED'))