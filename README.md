# image-search
Free Code Camp API project - Image Search Abstraction Layer

Search Usage:
```
https://elliotjz-image-search.herokuapp.com/api/bernie sanders
```

Expected Response:
```
{
"url": "https://upload.wikimedia.org/wikipedia/commons/d/de/Bernie_Sanders.jpg",
"snippet": "Bernie Sanders - Wikipedia",
"thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE0v4NQplN1P1Tetmjn5xN5c5wU3BA06_84tdsjl1Vm5qabbB3cG4loEU",
"context": "https://en.wikipedia.org/wiki/Bernie_Sanders"
},
{
"url": "https://s.bsd.net/bernie16/main/page/-/website/fb-share.png",
"snippet": "Issues - Bernie Sanders",
"thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDTE0GhdHsvpGetUD15LXBB1U1Ul6k8MlhFCHr2eVS071hHscNDt73GSU7",
"context": "https://berniesanders.com/issues/"
},
...
```

History Usage:

```
https://elliotjz-image-search.herokuapp.com/recent
```

Expected Response:

```
{
"recent_searches": [
"note to self",
"arkansas",
"donald duck",
...
```

[Use the app](https://elliotjz-image-search.herokuapp.com)
[Source Code](https://github.com/elliotjz/image-search)


