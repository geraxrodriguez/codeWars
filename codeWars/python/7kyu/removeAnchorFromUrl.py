def remove_url_anchor(url):
    # thought that conditional was needed in case of url not containing hashtag
    if ('#') in url:
        return url.split('#')[0]
    return url

# turns out though that u don't need conditional, it'll return string back normal
def remove_url_anchor(url):
    return url.split('#')[0]