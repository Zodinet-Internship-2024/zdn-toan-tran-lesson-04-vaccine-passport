const VaccineSearchForm = () => {
    return (
        <form className="search-form">
            <div className="search-form__field">
                <label htmlFor="name" className="field__label">
                    Họ và tên
                </label>
                <input type="text" className="field__input" />
            </div>
            <div className="search-form__field">
                <label htmlFor="name" className="field__label">
                    Giới tính
                </label>
                <select className="field__input">
                    <option value="Nam" selected>
                        Nam
                    </option>
                    <option value="Nữ">Nữ</option>
                </select>
            </div>
            <div className="search-form__field">
                <label htmlFor="name" className="field__label field__label--required">
                    Ngày sinh
                </label>
                <input type="date" className="field__input" />
            </div>
            <div className="search-form__field">
                <label htmlFor="name" className="field__label field__label--required">
                    Số CCCD / Mã định danh cá nhân
                </label>
                <input type="text" className="field__input" />
            </div>
            <div className="search-form__field">
                <label htmlFor="name" className="field__label">
                    Tỉnh/Thành phố
                </label>
                <select className="field__input">
                    <option value="Nam" selected>
                        Hồ Chí Minh
                    </option>
                    <option value="Nữ">Hà Nội</option>
                </select>
            </div>
            <div className="search-form__field">
                <label htmlFor="name" className="field__label">
                    Quận/Huyện
                </label>
                <select className="field__input">
                    <option value="Nam" selected>
                        Hồ Chí Minh
                    </option>
                    <option value="Nữ">Hà Nội</option>
                </select>
            </div>
            <div className="search-form__field">
                <label htmlFor="name" className="field__label">
                    Xã/Phường
                </label>
                <select className="field__input">
                    <option value="Nam" selected>
                        Hồ Chí Minh
                    </option>
                    <option value="Nữ">Hà Nội</option>
                </select>
            </div>
            <button type="submit" className="search-form__button">
                Tìm kiếm
            </button>
        </form>
    );
};
export default VaccineSearchForm;
