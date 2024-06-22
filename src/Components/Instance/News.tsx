import { Component } from 'react'

interface State {
    newsCount: number
}

export default class News extends Component<{}, State> {
    constructor(props: {}) {
        super(props)
        this.state = {
            newsCount: 0
        }
    }

    componentDidMount() {
        this.func(90, 80)
    }

    func = async (no1: number, no2: number) => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const options = {
            method: 'GET',
        }
        const response = await fetch(url, options)
        const data = await response.json()
        return data
    }

    signOut() {
        this.func(90, 80)
    }

    checkBoxChecked(id: number, test: string) {
        return {
            id: 3
        }
    }

    loadData(id: number, test: string) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.setState({
                    newsCount: 39
                })
                resolve({ me: 12 })
            }, 3000)
        })
    }

    render() {
        return (
            <div>
                Hello
                <button onClick={() => this.signOut()}>Sign Out</button>
                <input type="text" id='firstname' value='codeImprove' name='firstname' />
            </div>
        )
    }
}
