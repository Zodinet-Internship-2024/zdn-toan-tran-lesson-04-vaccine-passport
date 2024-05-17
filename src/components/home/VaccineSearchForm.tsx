import { z } from 'zod';
import VaccineSchema from '../../validation/vaccine-schema';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type VaccineSchemaType = z.infer<typeof VaccineSchema>;
const VaccineSearchForm = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<VaccineSchemaType>({
        resolver: zodResolver(VaccineSchema),
        mode: 'all',
        defaultValues: {
            city: 'Hồ Chí Minh',
            district: 'Quận 1',
            ward: 'Phường 1',
            gender: 'Nam',
        },
    });
    const onSubmit: SubmitHandler<VaccineSchemaType> = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="search-form">
            <div className="search-form__field">
                <label htmlFor="name" className="field__label">
                    Họ và tên
                </label>
                <input type="text" id="name" className="field__input" {...register('name')} />
            </div>
            {errors.name && <p className="search-form__error">{errors.name.message}</p>}

            <div className="search-form__field">
                <label htmlFor="gender" className="field__label">
                    Giới tính
                </label>
                <Controller
                    control={control}
                    name="gender"
                    render={({ field: { value, onChange } }) => (
                        <select
                            className="field__input"
                            id="gender"
                            value={value}
                            onChange={onChange}
                        >
                            <option value="Nam" selected>
                                Nam
                            </option>
                            <option value="Nữ">Nữ</option>
                        </select>
                    )}
                />
            </div>

            <div className="search-form__field">
                <label htmlFor="birthday" className="field__label field__label--required">
                    Ngày sinh
                </label>
                <input
                    type="date"
                    id="birthday"
                    className="field__input"
                    {...register('birthday')}
                />
            </div>
            {errors.birthday && <p className="search-form__error">{errors.birthday.message}</p>}

            <div className="search-form__field">
                <label htmlFor="identify" className="field__label field__label--required">
                    Số CCCD / Mã định danh cá nhân
                </label>
                <input
                    type="text"
                    id="identify"
                    className="field__input"
                    {...register('identify')}
                />
            </div>
            {errors.identify && <p className="search-form__error">{errors.identify.message}</p>}

            <div className="search-form__field">
                <label htmlFor="city" className="field__label">
                    Tỉnh/Thành phố
                </label>
                <Controller
                    control={control}
                    name="city"
                    render={({ field: { value, onChange } }) => (
                        <select
                            className="field__input"
                            id="city"
                            value={value}
                            onChange={onChange}
                        >
                            <option value="Hồ Chí Minh" selected>
                                Hồ Chí Minh
                            </option>
                            <option value="Hà Nội">Hà Nội</option>
                        </select>
                    )}
                />
            </div>
            <div className="search-form__field">
                <label htmlFor="district" className="field__label">
                    Quận/Huyện
                </label>
                <Controller
                    control={control}
                    name="district"
                    render={({ field: { value, onChange } }) => (
                        <select
                            className="field__input"
                            id="district"
                            value={value}
                            onChange={onChange}
                        >
                            <option value="Quận 1" selected>
                                Quận 1
                            </option>
                            <option value="Quận 2">Quận 2</option>
                        </select>
                    )}
                />
            </div>
            <div className="search-form__field">
                <label htmlFor="ward" className="field__label">
                    Xã/Phường
                </label>
                <Controller
                    control={control}
                    name="ward"
                    render={({ field: { value, onChange } }) => (
                        <select
                            className="field__input"
                            id="ward"
                            value={value}
                            onChange={onChange}
                        >
                            <option value="Phường 1" selected>
                                Phường 1
                            </option>
                            <option value="Phường 1">Phường 2</option>
                        </select>
                    )}
                />
            </div>
            <button
                type="submit"
                className="search-form__button"
                onClick={() => console.log(errors)}
            >
                Tìm kiếm
            </button>
        </form>
    );
};
export default VaccineSearchForm;
