import { header } from '../components/header';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

   ${header}
    <main>
        <section class="hero">
            <div>
                <h2><span>25% discount</span> all Paulo Coelho books!</h2>
            </div>
            <!--  <div>
                <h2>Offering message</h2>
            </div>
            <div>
                <h2>Offering message</h2>
            </div> -->
        </section>
        <section class="home-page__book-list">
            <ul>
                <li>
                    <div>
                        <div class="home-page__book-list">
                            <h2>Best Seller</h2>
                            <a href="" class="home-page__view-all-link">View All</a>
                        </div>
                        <ul class="book-card-container">
                            <li>
                                <div class="book-card--vertical">
                                    <img src="https://images.unsplash.com/photo-1641154748135-8032a61a3f80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                        alt="book cover" class="book-card__img">
                                    <h3 class="book-card__title">Book Title</h3>
                                    <p class="book-card__author">Book Author</p>
                                    <p class="book-card__price">30</p>
                                </div>
                            </li>
                            <li>
                                <div class="book-card--vertical">
                                    <img src="https://images.unsplash.com/photo-1641154748135-8032a61a3f80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                        alt="book cover" class="book-card__img">
                                    <h3 class="book-card__title">Book Title</h3>
                                    <p class="book-card__author">Book Author</p>
                                    <p class="book-card__price">30</p>
                                </div>
                            </li>
                            <li>
                                <div class="book-card--vertical">
                                    <img src="https://images.unsplash.com/photo-1641154748135-8032a61a3f80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                        alt="book cover" class="book-card__img">
                                    <h3 class="book-card__title">Book Title</h3>
                                    <p class="book-card__author">Book Author</p>
                                    <p class="book-card__price">30</p>
                                </div>
                            </li>
                            <li>
                                <div class="book-card--vertical">
                                    <img src="https://images.unsplash.com/photo-1641154748135-8032a61a3f80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                        alt="book cover" class="book-card__img">
                                    <h3 class="book-card__title">Book Title</h3>
                                    <p class="book-card__author">Book Author</p>
                                    <p class="book-card__price">30</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div>
                        <div class="home-page__book-list">
                            <h2>Best Seller</h2>
                            <a href="" class="home-page__view-all-link">View All</a>
                        </div>
                        <ul class="book-card-container">
                            <li>
                                <div class="book-card--vertical">
                                    <img src="https://images.unsplash.com/photo-1641154748135-8032a61a3f80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                        alt="book cover" class="book-card__img">
                                    <h3 class="book-card__title">Book Title</h3>
                                    <p class="book-card__author">Book Author</p>
                                    <p class="book-card__price">30</p>
                                </div>
                            </li>
                            <li>
                                <div class="book-card--vertical">
                                    <img src="https://images.unsplash.com/photo-1641154748135-8032a61a3f80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                        alt="book cover" class="book-card__img">
                                    <h3 class="book-card__title">Book Title</h3>
                                    <p class="book-card__author">Book Author</p>
                                    <p class="book-card__price">30</p>
                                </div>
                            </li>
                            <li>
                                <div class="book-card--vertical">
                                    <img src="https://images.unsplash.com/photo-1641154748135-8032a61a3f80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                        alt="book cover" class="book-card__img">
                                    <h3 class="book-card__title">Book Title</h3>
                                    <p class="book-card__author">Book Author</p>
                                    <p class="book-card__price">30</p>
                                </div>
                            </li>
                            <li>
                                <div class="book-card--vertical">
                                    <img src="https://images.unsplash.com/photo-1641154748135-8032a61a3f80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                        alt="book cover" class="book-card__img">
                                    <h3 class="book-card__title">Book Title</h3>
                                    <p class="book-card__author">Book Author</p>
                                    <p class="book-card__price">30</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div>
                        <div class="home-page__book-list">
                            <h2>Best Seller</h2>
                            <a href="" class="home-page__view-all-link">View All</a>
                        </div>
                        <ul class="book-card-container">
                            <li>
                                <div class="book-card--vertical">
                                    <img src="https://images.unsplash.com/photo-1641154748135-8032a61a3f80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                        alt="book cover" class="book-card__img">
                                    <h3 class="book-card__title">Book Title</h3>
                                    <p class="book-card__author">Book Author</p>
                                    <p class="book-card__price">30</p>
                                </div>
                            </li>
                            <li>
                                <div class="book-card--vertical">
                                    <img src="https://images.unsplash.com/photo-1641154748135-8032a61a3f80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                        alt="book cover" class="book-card__img">
                                    <h3 class="book-card__title">Book Title</h3>
                                    <p class="book-card__author">Book Author</p>
                                    <p class="book-card__price">30</p>
                                </div>
                            </li>
                            <li>
                                <div class="book-card--vertical">
                                    <img src="https://images.unsplash.com/photo-1641154748135-8032a61a3f80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                        alt="book cover" class="book-card__img">
                                    <h3 class="book-card__title">Book Title</h3>
                                    <p class="book-card__author">Book Author</p>
                                    <p class="book-card__price">30</p>
                                </div>
                            </li>
                            <li>
                                <div class="book-card--vertical">
                                    <img src="https://images.unsplash.com/photo-1641154748135-8032a61a3f80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                        alt="book cover" class="book-card__img">
                                    <h3 class="book-card__title">Book Title</h3>
                                    <p class="book-card__author">Book Author</p>
                                    <p class="book-card__price">30</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>

        </section>
    </main>
`