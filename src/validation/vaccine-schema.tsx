import { z } from 'zod';

const VaccineSchema = z.object({
    name: z.string().min(1, 'Vui lòng nhập họ và tên'),
    gender: z.string(),
    birthday: z.coerce.date().refine(
        (data) => {
            return data < new Date();
        },
        { message: 'Không hợp lệ' }
    ),
    identify: z
        .string()
        .min(1, 'Vui lòng nhập CCCD')
        .regex(/^\d{9,12}$/, 'Số CCCD không hợp lệ'),
    city: z.string(),
    district: z.string(),
    ward: z.string(),
});

export default VaccineSchema;
