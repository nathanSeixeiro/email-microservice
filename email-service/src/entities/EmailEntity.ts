class Email{
    public to: string
    public subject: string
    public content: string

    constructor(to: string, subj: string, cont: string){
        this.to = to
        this.subject = subj
        this.content = cont
    }
}

export default Email