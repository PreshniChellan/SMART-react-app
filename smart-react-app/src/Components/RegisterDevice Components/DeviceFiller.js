import Container from '@material-ui/core/Container';

export default function DeviceFiller(value, input){

    return (
        <div>
            <Container maxWidth="sm">
                {value} {input}
            </Container>
        </div>
    )
}