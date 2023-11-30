import { rest } from 'msw';

const baseURL = "/api/";

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json({
                pk: 1,
                username: "admin",
                email: "",
                first_name: "",
                last_name: "",
                profile_id: 1,
                profile_image: "https://res.cloudinary.com/dvywqvgif/image/upload/v1/media/images/look-what-you-made-me-do_wdtsyd"
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    })
];