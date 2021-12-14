const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})


test('I can test the Movie List site', async () => {
    
    let searchBar = await driver.findElement(By.xpath('//input'))

    await searchBar.sendKeys('Nacho Libre\n')

    await driver.sleep(3000)

    const movie = await driver.findElement(By.xpath('//button[contains(@id, "NachoLibre")]')).click()

    const notifyDelete = await driver.findElement(By.xpath('//aside[contains(@id, "message")]')).isDisplayed()

    expect(notifyDelete).toBeTruthy()
    
    
    await driver.sleep(3000)

    await searchBar.sendKeys('Nacho Libre\n')

    await driver.sleep(3000)

    const deleteLine = await driver.findElement(By.xpath('//li/span')).click()

    const spanChecked = await driver.findElement(By.xpath('//li/span[contains(@class, "checked")]')).isDisplayed()

    expect(spanChecked).toBeTruthy()

    await driver.sleep(3000)

    await searchBar.sendKeys('Batman\n')

    const batman = await driver.findElement(By.xpath('//li')).isDisplayed()

    expect(batman).toBeTruthy()

    await driver.sleep(3000)

    



    






     


    






})
