const adminAuth = (req, res, next) => {
    console.log("Admin authentication middleware");
    const token = "xyz";
    const isAdminAuthenticated = token === "xyz";
    if (isAdminAuthenticated) {
        res.status(401).send("Unauthorized: Admin authentication failed");
    } else {
        next();
    }
};
const userAuth = (req, res, next) => {
    console.log("User authentication middleware");
    const token = "xyznhvhj";
    const isUserAuthenticated = token === "xyz";
    if (isUserAuthenticated) {
        res.status(401).send("Unauthorized: User authentication failed");
    } else {
        next();
    }
};
module.exports = {adminAuth, userAuth};