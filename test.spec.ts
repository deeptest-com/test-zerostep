import { expect, test } from './test-with-fixture'

test.describe('SauceDemo', () => {
  test('can login and logout', async ({ page, ai }) => {
    await page.goto('https://www.saucedemo.com/')
    const [username, password] = await ai([
      'Get the first accepted username',
      'Get the accepted password',
    ])

    console.log('******', `username = ${username}, password = ${password}`)

    await ai([
      `Enter ${username} as the username`,
      `Enter ${password} as the password`
    ])
    await ai('Click Login')
    await ai('Click the menu button')
    await ai('Click the logout link')
  })
})
