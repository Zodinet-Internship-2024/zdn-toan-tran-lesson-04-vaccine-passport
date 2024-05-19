import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import VaccineSchema from '../../validation/vaccine-schema';
import VaccineFormFields from './VaccineFormFields';

export type VaccineSchemaType = z.infer<typeof VaccineSchema>;
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
            <VaccineFormFields register={register} control={control} errors={errors} />
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
