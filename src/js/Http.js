export class Http {
    constructor(uri) {
        this.uri = uri;
        this.xhr = new XMLHttpRequest();
    }

    get() {
        return new Promise((resolve, reject) => {
            this.xhr.open('GET', this.uri);
            this.xhr.send();
                this.xhr.addEventListener('load', function () {
                    resolve(JSON.parse(this.response));
                });
                this.xhr.addEventListener('error', () => reject());
            });
    }

    // post(formData) {
    //     return new Promise((resolve, reject) => {
    //         xhr.open("POST", this.uri, true);

    //         // Send the proper header information along with the request
    //         xhr.setRequestHeader("Content-Type", "application/json");
            
    //         xhr.onreadystatechange = () => {
    //           // Call a function when the state changes.
    //           if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    //             console.log("hello done")
    //             resolve(this.response);
    //           }
    //         };
    //         xhr.send(formData);
    //         });
    // }
}