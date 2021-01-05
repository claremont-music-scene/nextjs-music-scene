import Router from 'next/router';

export const fetcher = async (...args) => {
    try {
        const res = await fetch(...args, { mode: 'no-cors' });
        return res.json();
    }
    catch (err) {
        console.error(err);
    }
};

export const poster = async ({ formData, endpoint, redirectPath }) => {
    try {
        //https://stackoverflow.com/questions/43606056/proper-django-csrf-validation-using-fetch-post-request
        //https://github.com/github/fetch#receiving-cookies
        //https://github.com/github/fetch#receiving-cookies
        const csrfToken = getCookie('csrftoken')
        console.log(csrfToken)
        if (!csrfToken) {
            await fetch('http://local.music-scene-data.com:8000/api/set-csrf/')
        }
        //TODO X-CSRFToken header not being included?
        formData.append('csrfmiddlewaretoken', csrfToken)
        const res = await fetch(`http://local.music-scene-data.com:8000/api${endpoint}`, {
            method: 'POST',
            mode: 'no-cors',
            credentials: 'include',
            headers: {
                "X-CSRFToken": csrfToken
            },
            body: formData
        });
        if (res.status === 200){
            await Router.push(redirectPath)
        }

    }
    catch (err) {
        console.error(err);
    }
}