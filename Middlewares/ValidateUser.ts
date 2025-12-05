
//SORRY FOR PUSHING COMMENTED CODE




// module.exports = function isAuthenticated(req, res, next) {
//     if (req.session && req.session.userId) {
//         // User is logged in via session, continue to next route
//         next(); 
//     } else if (req.headers.authorization) {
//         // User is using a token (API call), validate token here
//         // (Similar logic to the JWT example provided previously)
//         // If valid, call next();
//         // If invalid, return res.status(401).json(...)
//         res.status(401).json({ message: 'Unauthorized - Invalid Token' });
//     } else {
//         // 2. If not logged in by either method, send an error or redirect
//         res.status(401).json({ message: 'Unauthorized - Please log in' });
//         // Or for traditional web apps:
//         // res.redirect('/login'); 
//     }
// };
