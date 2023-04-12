const validation = (values) => {
    const errors = {};
    if (!values.name) {
        errors.name = "Vui lòng nhập tên của bạn";
    }
    if (!values.phone) {
        errors.phone = "Vui lòng nhập số điện thoại";
    }
    if (!values.email) {
        errors.email = "Vui lòng nhập email";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email không hợp lệ";
    }
    if (!values.password) {
        errors.password = "Vui lòng nhập password";
    } else if (values.password.length < 6) {
        errors.password = "Password cần có từ 6 ký tự";
    }
    if (!values.cfpassword) {
        errors.cfpassword = "Vui lòng nhập lại mật khẩu";
    } else if (values.cfpassword !== values.password) {
        errors.cfpassword = "Mật khẩu không trùng khớp";
    }
    return errors;
};
const validationLog = (logValues) => {
    const errors = {};
    if (!logValues.logEmail) {
        errors.logEmail = "Vui lòng nhập email";
    } else if (!/\S+@\S+\.\S+/.test(logValues.logEmail)) {
        errors.logEmail = "Email không hợp lệ";
    }
    if (!logValues.logPassword) {
        errors.logPassword = "Vui lòng nhập Password";
    } else if (logValues.logPassword.length < 6) {
        errors.logPassword = "Password cần có từ 6 ký tự";
    }
    return errors;
};
export { validationLog };
export default validation;
