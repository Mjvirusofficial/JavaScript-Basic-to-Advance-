class ThisDemo {
    message = "hello"
    getmessage() {
        return this.message;
    }
}
console.log(new ThisDemo().getmessage());

