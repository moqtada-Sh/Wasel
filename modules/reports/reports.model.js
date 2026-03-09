const db = require("../../database/connection");

const createReport = (data, callback) => {
    const sql = `INSERT INTO reports (user_id, category, description, latitude, longitude) VALUES (?,?,?,?,?)`;
    db.query(sql, [data.user_id, data.category, data.description, data.latitude, data.longitude], callback);
};

const getReports = (limit, offset, callback) => {
    const sql = `SELECT * FROM reports ORDER BY created_at DESC LIMIT ? OFFSET ?`;
    db.query(sql, [limit, offset], callback);
};

const getReportById = (id, callback) => {
    const sql = `SELECT * FROM reports WHERE id = ?`;
    db.query(sql, [id], callback);
};

const addVote = (data, callback) => {
    const sql = `INSERT INTO report_votes (report_id, user_id, vote) VALUES (?,?,?)`;
    db.query(sql, [data.report_id, data.user_id, data.vote], callback);
};

const addModeration = (data, callback) => {
    const sql = `INSERT INTO moderation_actions (moderator_id, report_id, action, reason) VALUES (?,?,?,?)`;
    db.query(sql, [data.moderator_id, data.report_id, data.action, data.reason], callback);
};

const updateReportStatus = (id, status, callback) => {
    const sql = `UPDATE reports SET status = ? WHERE id = ?`;
    db.query(sql, [status, id], callback);
};

module.exports = {
    createReport,
    getReports,
    getReportById,
    addVote,
    addModeration,
    updateReportStatus
};