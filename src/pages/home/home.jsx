import React from 'react';
import './home.css';
import {
    Button,
    Card,
} from 'react-bootstrap'
import imglogo from '../assets/img-brand-logo.png';
import banner from '../assets/img-big-banner.jpg';
import doctor from '../assets/img-doctor.svg';

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render () {
        return (
            <div className='all'>
                <div className='aa'>
                    <a><i style={{color:'green'}} class="fas fa-calendar-alt"></i>  Senin - Jumat (09.00 - 18.00 WIB)</a>
                    <a><i style={{color:'blue'}} class="far fa-comments-alt"></i> +62811 1122 015</a>
                    <a><i style={{color:'salmon'}} class="far fa-envelope"></i> cs@triasse.com</a>
                </div>
                <div className='ab'>
                    <div>
                        {/* <Image className='abi' src='./img-brand-logo.png'/> */}
                        <img src={imglogo} alt="img-brand-logo"/>
                    </div>
                    <div className='abb'>
                        <p>Paket Test Darah</p>
                        <p>Laboratorium</p>
                        <p>Artikel</p>
                        <div className='abc'>
                            <Button variant="secondary">Masuk</Button>
                        </div>
                        <div className='abd'>
                            <Button variant="primary">Daftar</Button>
                        </div>
                    </div>
                </div>
                <div className='ac'>
                    <img className='aci' src={banner} alt="img-big-banner"/>
                </div>
                <div className='ad'>
                    <Card className='adcard'>
                        <Card.Header className='ada'>
                                <div className='adaa'>
                                    <h5>Pilih Jenis Pemeriksaan</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                                </div>
                                <div className='adab'>
                                    <img src={doctor} alt="img-doctor.svg"/>
                                </div>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="warning">Cari Lab</Button>
                        </Card.Body>
                    </Card>
                    <div className='adb'></div>
                    <div className='adc'></div>
                </div>
                <div className='ae'>
                    <h1>Mengapa harus Triasse?</h1>
                </div>
                <div className='af'>
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, maiores reiciendis omnis voluptatum labore deserunt placeat non ipsum adipisci voluptas. Quod odit enim sequi voluptatum veritatis officiis reiciendis dolor ipsa?</p>
                </div>
                <div className='ag'>
                    <h1>Paket Medical Checkup</h1>
                </div>
                <div className='ah'>
                    <h2>Blue Banner</h2>
                    <h2>Red Banner</h2>
                </div>
                <div className='ai'>
                    <h1>Mitra Laboratorium Terbaik di Indonesia</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error numquam vero nam. Commodi culpa qui perferendis dolorum quae aperiam, ipsum dolore, doloremque neque possimus accusantium officiis recusandae facere officia ipsam.</p>
                </div>
                <div className='aj'>
                    <h1>Rapidtest Covid 19 Sekarang</h1>
                </div>
                <div className='ak'>
                    <h1>Media Coverage</h1>
                    <div>Gambar Media</div>
                </div>
                <div className='al'>
                    <h3>Toko Furniture Online Terpercaya di Indonesia</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci sint dolorem quaerat neque soluta perspiciatis, tenetur assumenda repudiandae eaque numquam doloribus blanditiis corporis ratione alias veniam, pariatur nemo, voluptatem eligendi.</p>
                </div>
                <div className='am'>
                    <h2>Berlangganan newsletter special</h2>
                </div>
                <div className='an'>
                    <h1>Footer</h1>
                </div>
            </div>
        )
    }
}

export default HomePage