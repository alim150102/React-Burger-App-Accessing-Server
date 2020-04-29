import React from 'react'
import Aux from '../Aux/Aux'
import Modal from '../../component/Ui/Modal/Modal'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends React.Component {
        constructor(props){
            super(props)
            this.state = {
                error : null
            }
        }

        componentWillMount(){
            this.resInterceptor = axios.interceptors.response.use(res => res, error => this.setState({error : error}))
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error : null})
                return req
            })
        }

        componentWillUnmount(){
            axios.interceptors.response.eject(this.resInterceptor)
            axios.interceptors.request.eject(this.reqInterceptor)
        }

        errorConfirmHandler = () =>{
            this.setState({error : null})
        }
        render(){
            return (
                <Aux>
                    <Modal 
                    show={this.state.error}
                    modalClosed={this.errorConfirmHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
            )
        }
        
    }
}

export default withErrorHandler