const htmlDiv = document.querySelector('#html');
if (htmlDiv != null) htmlDiv.innerHTML = 
`
    
    <form class="row container" style="margin: auto; margin-top: 20px; width: 80%; padding: 20px; background: rgba(245, 246, 250,1.0); border-radius: 10px;">
        <h2 style="margin: auto"> Order food </h2>
        <div class="mb-3 col-12">
            <label for="address" class="form-label">Address</label>
            <input type="text" class="form-control" id="address">
        </div>

        <div class="mb-3 col-5">
            <label for="food" class="form-label">Food</label>
            <select id="food" class="form-select" aria-label="Default select example" placeholder="Menu">
                <option value="1">Chicken Nice</option>
                <option value="2">Nonna's Pizza</option>
                <option value="3">Becky's Burger</option>
                <option value="4">Idian Curry</option>
                <option value="5">Sushi</option>
            </select>
        </div>

        <div class="mb-3 col-3">
            <label for="order-number" class="form-label">Order number</label>
            <input type="number" class="form-control" id="order-number">
        </div>

        <div class="mb-3 col-4">
            <label for="tel" class="form-label">Tel</label>
            <input type="tel" class="form-control" id="tel">
        </div>

        <div class="mb-3 col-12">
            <label for="payment-method" class="form-label">Payment method</label>
            <div id="payment-method">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Cash
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                    <label class="form-check-label" for="flexRadioDefault2">
                        Momo
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked>
                    <label class="form-check-label" for="flexRadioDefault3">
                        Bank transfer
                    </label>
                </div>
            </div>

            <button type="submit" class="mt-3 col-2 btn btn-primary">Order</button>
        </div>
    </form>
`