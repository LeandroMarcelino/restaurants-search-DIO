import React, { useState } from "react";
import Slider from "react-slick";
import TextField, { HelperText, Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png'
import { Container, Carousel, Search, Logo, Wrapper, CarouselTitle } from './styles';
import { Card, RestaurantCard, Modal, Map } from '../../components';

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [modalOpened, setModalOpened] = useState(true);

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,

    };

    return (
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="Logo do restaurante" />
                    <TextField
                        label='Pesquisar Restaurantes'
                        outlined

                        //  onTrailingIconSelect={() => this.setState({ value: '' })}
                        trailingIcon={<MaterialIcon role="button" icon="search" />}
                    >
                        <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)} />
                    </TextField>
                    <CarouselTitle>Na sua Área</CarouselTitle>
                    <Carousel {...settings}>
                        <Card photo={restaurante} title="nome bla" />
                        <Card photo={restaurante} title="nome bla" />
                        <Card photo={restaurante} title="nome bla" />
                        <Card photo={restaurante} title="nome bla" />
                        <Card photo={restaurante} title="nome bla" />
                        <Card photo={restaurante} title="nome bla" />
                    </Carousel>
                    <button onClick={() => setModalOpened(true)}>Abrir modal</button>
                </Search>
                <RestaurantCard />
            </Container>
            <Map />
            {/*<Modal open={modalOpened} onclose={() => setModalOpened(!modalOpened)} />*/}
        </Wrapper>
    );
};

export default Home;