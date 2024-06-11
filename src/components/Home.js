import React from 'react';
//import {BrowserRouter as Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import jordan from '../Shoepic/air-jordan.png'
import nike from '../Shoepic/nike.png'
import adidas from '../Shoepic/adidas.png'
import reebox from '../Shoepic/reebok.png'
import vans from '../Shoepic/vans.png'
import converse from '../Shoepic/converse.png'


const Home = () => {
  return (
    <>
    <div style={{gridArea:'auto'}}>
      <div style={{alignItems:'center'}}>
      <Form inline  >
        <Row style={{marginTop:'10px', alignContent:'center', marginLeft:'400px'}} >
          <Col xs="auto" >
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto" >
            <Button type="submit"  >Submit</Button>
          </Col>
        </Row>
      </Form>
      </div>
            <h1>Products</h1>
  <div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img  src="https://i1.wp.com/sportfits.com/wp-content/uploads/2017/11/nike-store-pre-black-friday-2017-sale.jpg" class=" w-100"  alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://cdn.grabon.in/gograbon/images/web-images/uploads/1549616344492/adidas-coupons.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


            <h3>Sneakers</h3>
    </div>

  <div class="col" style={{gap:'30px'}}>
  <div class="col-4">
    <div id="simple-list-example" class="d-flex flex-row simple-list-example-scrollspy text-center" style={{gap:'40px'}}>
      <a class="p-1 rounded"  href="#jordan-1"><h2 style={{color:'black'}}><img src={jordan} alt='jr' />Jordan</h2></a>
      <a class="p-1 rounded" href="#nike-2"><h2 style={{color:'black'}}><img src={nike} alt='jr' />Nike</h2></a>
      <a class="p-1 rounded" href="#adidas-3"><h2 style={{color:'black'}}><img src={adidas} alt='jr' />Adidas</h2></a>
      <a class="p-1 rounded" href="#reebox-4"><h2 style={{color:'black'}}><img src={reebox} alt='jr' />Reebox</h2></a>
      <a class="p-1 rounded" href="#vans-5"><h2 style={{color:'black'}}><img src={vans} alt='jr' />Vans</h2></a>
      <a class="p-1 rounded" href="#converse-6"><h2 style={{color:'black'}}><img src={converse} alt='jr' />Converse</h2></a>
      <a class="p-1 rounded" href="#converse-6"><h2 style={{color:'black'}}><img src={converse} alt='jr' />Puma</h2></a>
    </div>
  </div>
  <div class="col-8">
    <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
      <h4 id="jordan-1">Jordan</h4>
      <div>
        <ul className="sneaker-list" style={{ display: 'flex', listStyleType: 'none', gap: '40px' }}>
            <li className='' style={{ textAlign: 'center' }}>
              Air Jordan XIII 
             <br />
             <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6frpgjATbWxw1BtR-00RDaqWRq1CEXvD9JKwmkHC2Xg&s' alt='' style={{ marginTop: '10px' }} />
             <p>
              Released in the late 2015, the Jordan XIII is one best options disired by any man on their feet.Sales with the best discount
              found on Nike Shop. Best colors are White, Gray and Black. 
             </p>
            </li>
            <li className='' style={{ textAlign: 'center' }}>
              Air Jordan XX3
              <br />
             <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvGtEMIn4uR4JbLFIKSklol7juZoFaU2_Y6grE0OIx2uCo72AgL22-yhIGTANMrk7zUzY&usqp=CAU' alt='' style={{ marginTop: '0px', height: '230px', width: '250px' }} />
             <p>
              Released in the late 2015, the Jordan XIII is one best options disired by any man on their feet.Sales with the best discount
              found on Nike Shop. Best colors are White, Gray and Black. 
             </p>
            </li>
            <li className='' style={{ textAlign: 'center' }}>
              Air Jordan V
             <br />
             <img src='https://shopcultive.com/cdn/shop/products/551059_03_jpg.jpg?v=1628859466' alt='' style={{ marginTop: '10px', height: '165px', width: '250px' }} />
             <p>
              Released in the late 2015, the Jordan XIII is one best options disired by any man on their feet.Sales with the best discount
              found on Nike Shop .Best colors are White, Gray and Black. 
             </p>
            </li>
            <li className='' style={{ textAlign: 'center' }}>
              Jordan True Flight
             <br />
             <img src='https://www.kickscrew.com/cdn/shop/files/main-square_e70824f8-78cf-4379-90f1-fe5853ef9648_540x.jpg?v=1708315524' alt='' style={{ marginTop: '0px', height: '200px', width: '250px' }} />
             <p>
              Released in the late 2015, the Jordan XIII is one best options disired by any man on their feet.Sales with the best discount
              found on Nike Shop. Best colors are White, Gray and Black. 
             </p>
            </li>
        </ul>
      </div>
      <h4 id="nike-2" style={{marginTop:'50px'}}>Nike</h4>
      <div>
        <ul className="sneaker-list" style={{ display: 'flex', listStyleType: 'none', gap: '40px'}}>
            <li className='' style={{ textAlign: 'center' }}>
              Jordan Spizike Low 
             <img src='https://cms-cdn.thesolesupplier.co.uk/2024/01/air-jordan-spizike-low-lightning-hf4319-741_w672_h672_pad_.jpeg.webp' alt='' style={{ marginTop: '0px', height: '250px', width: '250px' }} />
             <p>
              Released in the late 2015, the Jordan XIII is one best options disired by any man on their feet.Sales with the best discount
              found on Nike Shop. Best colors are White, Gray and Black. 
             </p>
            </li>
            <li className='' style={{ textAlign: 'center' }}>
                Jumpman MVP
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNfYX-b3yWHaDnCgC5q7LV-4ufxEoIsIOO6D-mBdSBQxqzLKVaty6L_w68HWAwcyLVmQs&usqp=CAU' alt='' style={{ marginTop: '0px', height: '255px', width: '250px' }} />
                  <p>
                    Released in the late 2015, the Jordan XIII is one best options disired by any man on their feet.Sales with the best discount
                    found on Nike Shop. Best colors are White, Gray and Black. 
                  </p>
            </li>
            <li className='' style={{ textAlign: 'center' }}>
                Nike Air VaporMax
                  <img src='https://s13emagst.akamaized.net/products/34202/34201077/images/res_3eee441530b2ec24fe72edd5b8691d97.jpg?v2' alt='' style={{ marginTop: '0px', height: '260px', width: '270px' }} />
                  <p>
                    Released in the late 2015, the Jordan XIII is one best options disired by any man on their feet.Sales with the best discount
                    found on Nike Shop. Best colors are White, Gray and Black. 
                  </p>
            </li>
            <li className='' style={{ textAlign: 'center' }}>
                Nike Furyosa NRG
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREG_gsK1dwoHsn2lKLkjGBOQDLoR3QT0YUXYVzgsKmNI9fhCGIRoNOMt-rIN93LGE27G8&usqp=CAU' alt='' style={{ marginTop: '0px', height: '225px', width: '250px' }} />
                  <p>
                    Released in the late 2015, the Jordan XIII is one best options disired by any man on their feet.Sales with the best discount
                    found on Nike Shop. Best colors are White, Gray and Black. 
                  </p>
            </li>
        </ul>
      </div>
      <h4 id="adidas-3">Adidas</h4>
       <div>
        <ul className="sneaker-list" style={{ display: 'flex', listStyleType: 'none', gap: '40px'}}>
            <li className='' style={{ textAlign: 'center' }}>
              Jordan Spizike Low 
             <img src='https://cms-cdn.thesolesupplier.co.uk/2024/01/air-jordan-spizike-low-lightning-hf4319-741_w672_h672_pad_.jpeg.webp' alt='' style={{ marginTop: '0px', height: '250px', width: '250px' }} />
             <p>
              Released in the late 2015, the Jordan XIII is one best options disired by any man on their feet.Sales with the best discount
              found on Nike Shop. Best colors are White, Gray and Black. 
             </p>
            </li>
            <li className='' style={{ textAlign: 'center' }}>
              Jumpman MVP
             <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNfYX-b3yWHaDnCgC5q7LV-4ufxEoIsIOO6D-mBdSBQxqzLKVaty6L_w68HWAwcyLVmQs&usqp=CAU' alt='' style={{ marginTop: '0px', height: '255px', width: '250px' }} />
                  <p>
                    Released in the late 2015, the Jordan XIII is one best options disired by any man on their feet.Sales with the best discount
                    found on Nike Shop. Best colors are White, Gray and Black. 
                  </p>
            </li>
            <li className='' style={{ textAlign: 'center' }}>
              Nike Air VaporMax
              <img src='https://s13emagst.akamaized.net/products/34202/34201077/images/res_3eee441530b2ec24fe72edd5b8691d97.jpg?v2' alt='' style={{ marginTop: '0px', height: '260px', width: '270px' }} />
            </li>
            <li className='' style={{ textAlign: 'center' }}>
                Nike Furyosa NRG
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREG_gsK1dwoHsn2lKLkjGBOQDLoR3QT0YUXYVzgsKmNI9fhCGIRoNOMt-rIN93LGE27G8&usqp=CAU' alt='' style={{ marginTop: '0px', height: '225px', width: '250px' }} />
            </li>
        </ul>
      </div>
      <h4 id="reebox-4">Reebox</h4>
      <div>
        <ul className="sneaker-list" style={{ display: 'flex', listStyleType: 'none', gap: '40px'}}>
            <li className='' style={{ textAlign: 'center' }}>
              Jordan Spizike Low 
             <img src='https://cms-cdn.thesolesupplier.co.uk/2024/01/air-jordan-spizike-low-lightning-hf4319-741_w672_h672_pad_.jpeg.webp' alt='' style={{ marginTop: '0px', height: '250px', width: '250px' }} />
            </li>
            <li className='' style={{ textAlign: 'center' }}>
              Jumpman MVP
             <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNfYX-b3yWHaDnCgC5q7LV-4ufxEoIsIOO6D-mBdSBQxqzLKVaty6L_w68HWAwcyLVmQs&usqp=CAU' alt='' style={{ marginTop: '0px', height: '255px', width: '250px' }} />
            </li>
            <li className='' style={{ textAlign: 'center' }}>
              Nike Air VaporMax
              <img src='https://s13emagst.akamaized.net/products/34202/34201077/images/res_3eee441530b2ec24fe72edd5b8691d97.jpg?v2' alt='' style={{ marginTop: '0px', height: '260px', width: '270px' }} />
            </li>
            <li className='' style={{ textAlign: 'center' }}>
                Nike Furyosa NRG
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREG_gsK1dwoHsn2lKLkjGBOQDLoR3QT0YUXYVzgsKmNI9fhCGIRoNOMt-rIN93LGE27G8&usqp=CAU' alt='' style={{ marginTop: '0px', height: '225px', width: '250px' }} />
            </li>
        </ul>
      </div>
      <h4 id="vans-5">Vans</h4>
       <div>
        <ul className="sneaker-list" style={{ display: 'flex', listStyleType: 'none', gap: '40px'}}>
            <li className='' style={{ textAlign: 'center' }}>
              Jordan Spizike Low 
             <img src='https://cms-cdn.thesolesupplier.co.uk/2024/01/air-jordan-spizike-low-lightning-hf4319-741_w672_h672_pad_.jpeg.webp' alt='' style={{ marginTop: '0px', height: '250px', width: '250px' }} />
            </li>
            <li className='' style={{ textAlign: 'center' }}>
              Jumpman MVP
             <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNfYX-b3yWHaDnCgC5q7LV-4ufxEoIsIOO6D-mBdSBQxqzLKVaty6L_w68HWAwcyLVmQs&usqp=CAU' alt='' style={{ marginTop: '0px', height: '255px', width: '250px' }} />
            </li>
            <li className='' style={{ textAlign: 'center' }}>
              Nike Air VaporMax
              <img src='https://s13emagst.akamaized.net/products/34202/34201077/images/res_3eee441530b2ec24fe72edd5b8691d97.jpg?v2' alt='' style={{ marginTop: '0px', height: '260px', width: '270px' }} />
            </li>
            <li className='' style={{ textAlign: 'center' }}>
                Nike Furyosa NRG
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREG_gsK1dwoHsn2lKLkjGBOQDLoR3QT0YUXYVzgsKmNI9fhCGIRoNOMt-rIN93LGE27G8&usqp=CAU' alt='' style={{ marginTop: '0px', height: '225px', width: '250px' }} />
            </li>
        </ul>
      </div>
      <h4 id="converse-6">Converse</h4>
       <div>
        <ul className="sneaker-list" style={{ display: 'flex', listStyleType: 'none', gap: '40px'}}>
            <li className='' style={{ textAlign: 'center' }}>
              Jordan Spizike Low 
             <img src='https://cms-cdn.thesolesupplier.co.uk/2024/01/air-jordan-spizike-low-lightning-hf4319-741_w672_h672_pad_.jpeg.webp' alt='' style={{ marginTop: '0px', height: '250px', width: '250px' }} />
            </li>
            <li className='' style={{ textAlign: 'center' }}>
              Jumpman MVP
             <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNfYX-b3yWHaDnCgC5q7LV-4ufxEoIsIOO6D-mBdSBQxqzLKVaty6L_w68HWAwcyLVmQs&usqp=CAU' alt='' style={{ marginTop: '0px', height: '255px', width: '250px' }} />
            </li>
            <li className='' style={{ textAlign: 'center' }}>
              Nike Air VaporMax
              <img src='https://s13emagst.akamaized.net/products/34202/34201077/images/res_3eee441530b2ec24fe72edd5b8691d97.jpg?v2' alt='' style={{ marginTop: '0px', height: '260px', width: '270px' }} />
            </li>
            <li className='' style={{ textAlign: 'center' }}>
                Nike Furyosa NRG
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREG_gsK1dwoHsn2lKLkjGBOQDLoR3QT0YUXYVzgsKmNI9fhCGIRoNOMt-rIN93LGE27G8&usqp=CAU' alt='' style={{ marginTop: '0px', height: '225px', width: '250px' }} />
            </li>
        </ul>
      </div>
    </div>
  </div>
</div>
  </>
  )
}

export default Home