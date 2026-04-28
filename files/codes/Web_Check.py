import urllib.request
import time

def check_site(url):
    try:
        status = urllib.request.urlopen(url).getcode()
        if status == 200:
            print(f"Success! {url} is Online.")
    except:
        print(f"Alert! {url} might be Down.")

# Test your site
url_to_test = "https://www.google.com" 
check_site(url_to_test)
time.sleep(5)