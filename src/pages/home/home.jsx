import React from 'react';
import './home.css';
import {
    Button,
    Card,
    Form,
} from 'react-bootstrap';
import imglogo from '../assets/img-brand-logo.png';
import banner from '../assets/img-big-banner.jpg';
import doctor from '../assets/img-doctor.svg';
import stetos from '../assets/img-example-1.png';
import bana from '../assets/img-banner2-1.jpg';
import banb from '../assets/img-banner2-2.jpg';
import mitraa from '../assets/img-mitra-1.png';
import mitrab from '../assets/img-mitra-2.png';
import mitrac from '../assets/img-mitra-3.png';
import mitrad from '../assets/img-mitra-4.png';
import mitrae from '../assets/img-mitra-5.png';



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
                            <Form className='adb' >
                                <Form.Group className="adba">
                                    <Form.Label>Provinsi</Form.Label>
                                    <Form.Control style={{fontSize:'12px'}}  placeholder="Pilih Provinsi" />
                                </Form.Group>
                                <Form.Group className="adbb">
                                    <Form.Label>Kota/Kabupaten</Form.Label>
                                    <Form.Control style={{fontSize:'12px'}} placeholder="Pilih Kota/Kabupaten" />
                                </Form.Group>
                                <Form.Group className="adbc">
                                    <Form.Label>Paket & jenis pemeriksaan</Form.Label>
                                    <Form.Control style={{fontSize:'12px'}} placeholder="Pilih paket atau jenis pemeriksaan" />
                                </Form.Group>
                            </Form>
                            <div className='adc'>
                                <Button className='adca'>Cari Lab</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className='ae'>
                    <div className='aea'>
                        <h2>Mengapa harus Triasse?</h2>
                        <p>Lorem ipsum dolorut libero officiis, laudantium molestias itaque, quae odio? Facilis exercitationem unde fugit.</p>
                    </div>
                    <div className='aeb'>
                        <div className='aeba'></div>
                        <div className='aebb'>
                            <div className='aebba'>
                                <div className='kotakkecil'></div>
                                <div className='promo'>
                                    <h6>Jaminan harga terbaik</h6>
                                    <p>Harga kompetitif di Laboratorium terbesar dan terpercaya di Indonesia seperti Prodia, Kimia Farma, Parahita, GS Lab & Biotest.</p>
                                </div>
                            </div>
                            <div className='aebba'>
                                <div className='kotakkecil'></div>
                                <div className='promo'>
                                    <h6>Layanan home service</h6>
                                    <p>Pemeriksaan bisa dilakukan dari rumah sendiri dengan layanan Home Service, petugas datang untuk melakukan pengecekan dan tes.</p>
                                </div>
                            </div>
                            <div className='aebba'>
                                <div className='kotakkecil'></div>
                                <div className='promo'>
                                    <h6>Cicilan 4x dengan bunga 0%</h6>
                                    <p>Pembayaran paket pemeriksaan lebih ringan karena bisa dicicil sebanyak empat kali, dan tanpa bunga tambahan.</p>
                                </div>
                            </div>
                            <div className='aebba'>
                                <div className='kotakkecil'></div>
                                <div className='promo'>
                                    <h6>Pesan dan hasil online</h6>
                                    <p>Pesan dan hasil pemeriksaan bisa dilakukan secara online, proses lebih cepat tanpa perlu antri di lab.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='af'>
                    <h4>Lorem ipsum dolor sit amet</h4>
                    <p>Lorem, voluptas. Quod odit enim sequi voluptatum veritatis officiis reiciendis dolor ipsa?</p>
                </div>
                <div className='ag'>
                    <Card style={{ width: '10rem', height: '10rem' }}>
                        <Card.Img variant="top" src={stetos} alt="img-example-1.png" />
                        <Card.Body>
                            <Card.Title style={{fontSize: '12px'}}>Paket Medical Check-up Basic</Card.Title>
                            <Card.Text style={{fontSize: '9px'}}>
                            <p>Harga mulai dari</p>
                            <p>Rp 416.000</p>
                            <h5 style={{fontSize: '11px'}} >Rp364.001</h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '10rem', height: '10rem' }}>
                        <Card.Img variant="top" src={stetos} alt="img-example-1.png" />
                        <Card.Body>
                            <Card.Title style={{fontSize: '14px'}}>Paket Medical Check-up Basic</Card.Title>
                            <Card.Text style={{fontSize: '9px'}}>
                            <p>Harga mulai dari</p>
                            <p>Rp 416.000</p>
                            <h5 style={{fontSize: '12px'}} >Rp364.001</h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '12rem', height: '15 rem' }}>
                        <Card.Img variant="top" src={stetos} alt="img-example-1.png" />
                        <Card.Body>
                            <Card.Title style={{fontSize: '14px'}}>Paket Medical Check-up Basic</Card.Title>
                            <Card.Text style={{fontSize: '9px'}}>
                            <p>Harga mulai dari</p>
                            <p>Rp 416.000</p>
                            <h5 style={{fontSize: '12px'}} >Rp364.001</h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '12rem', height: '15 rem' }}>
                        <Card.Img variant="top" src={stetos} alt="img-example-1.png" />
                        <Card.Body>
                            <Card.Title style={{fontSize: '14px'}}>Paket Medical Check-up Basic</Card.Title>
                            <Card.Text style={{fontSize: '9px'}}>
                            <p>Harga mulai dari</p>
                            <p>Rp 416.000</p>
                            <h5 style={{fontSize: '12px'}} >Rp364.001</h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '12rem', height: '15 rem' }}>
                        <Card.Img variant="top" src={stetos} alt="img-example-1.png" />
                        <Card.Body>
                            <Card.Title style={{fontSize: '14px'}}>Paket Medical Check-up Basic</Card.Title>
                            <Card.Text style={{fontSize: '9px'}}>
                            <p>Harga mulai dari</p>
                            <p>Rp 416.000</p>
                            <h5 style={{fontSize: '12px'}} >Rp364.001</h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '12rem', height: '15 rem' }}>
                        <Card.Img variant="top" src={stetos} alt="img-example-1.png" />
                        <Card.Body>
                            <Card.Title style={{fontSize: '14px'}}>Paket Medical Check-up Basic</Card.Title>
                            <Card.Text style={{fontSize: '9px'}}>
                            <p>Harga mulai dari</p>
                            <p>Rp 416.000</p>
                            <h5 style={{fontSize: '12px'}} >Rp364.001</h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='ah'>
                    <img className='aha' src={bana} alt="img-banner2-1.jpg"/>
                    <img className='ahb' src={banb} alt="img-banner2-2.jpg"/>
                </div>
                <div className='ai'>
                    <h4>Mitra Laboratorium Terbaik di Indonesia</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error numquam vero nam. Commodi culpa qui perferendis dolorum quae aperiam, ipsum dolore, doloremque neque possimus accusantium officiis recusandae facere officia ipsam.</p>
                    <div className='mitra' >
                        <img className='imgmit' src={mitraa} alt="img-mitra-1.png"/>
                        <img className='imgmit' src={mitrab} alt="img-mitra-2.png"/>
                        <img className='imgmit' src={mitrac} alt="img-mitra-3.png"/>
                        <img className='imgmit' src={mitrad} alt="img-mitra-4.png"/>
                        <img className='imgmit' src={mitrae} alt="img-mitra-5.png"/>
                    </div>
                </div>
                <div className='aj'>
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut exercitationem dicta excepturi nihil, consectetur, veniam sint, ad eaque ut explicabo laborum unde laboriosam mollitia. Error nesciunt consequatur laborum eos saepe!</p>
                    <div>Gambar 4 card</div>
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