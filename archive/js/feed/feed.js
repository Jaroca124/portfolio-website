var activeFilters = [];
var masterPosts = [];
var set = false;


Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

function filter(tag) {
    var tagText = tag.innerHTML;
    console.log(activeFilters);
    // Remove Tag
    if (contains.call(activeFilters, tagText)) {
        activeFilters.remove(tagText);
        console.log(activeFilters);
        if (activeFilters.length == 0) {
            document.getElementById('filterList').innerHTML = "Click on a tag to filter.";
        }
        else {
            determineFilters(tagText);
        }
    }
    
    // Add Tag
    else {
        activeFilters.push(tagText);
        console.log(activeFilters);
        determineFilters(tagText);
    }
}

function determineFilters(tagText) {
    document.getElementById('filterList').innerHTML = "Active Filters: ";
    
    var addTag = "";

    // Add Tags to Filter Bar at the Top
    for (var i = 0; i < activeFilters.length; i++) {
        addTag += '<span class="p-2 badge badge-pill badge-primary">' + activeFilters[i] + '</span>';  
    }

    addTag += '<button type="button" onclick="clearFilters()" class="ml-4 btn btn-secondary">Clear Filters</button>';

    document.getElementById('filterList').innerHTML = addTag;

    // Get All Tags
    var postTags = document.getElementsByClassName("badgeNative");

    var showPosts = [];
    var allPosts = [];

    // Get Posts with Tag
    for (var j = 0; j < postTags.length; j++) {
        // Get all the posts to add to the master list
        if (!set && contains.call(allPosts, postTags[j].parentElement.parentElement.parentElement.parentElement) != true) {
            allPosts.push(postTags[j].parentElement.parentElement.parentElement.parentElement);  
        }
    }
        
        //For every active filter
        /*for (var a = 0; a < activeFilters.length; a++) {
            console.log(activeFilters[a]);
            // NEED: All active filters are in post
            // If a tag is equal to the one clicked, add the post of that tag to an array.
            if (postTags[j].innerHTML == activeFilters[a]) {
                // If the post isn't in the showPosts array, add it
                if (contains.call(showPosts, postTags[j].parentElement.parentElement.parentElement.parentElement) != true) {
                    showPosts.push(postTags[j].parentElement.parentElement.parentElement.parentElement);
                }
            }
        }*/
    }

    // Add All Posts to Master List
    if (set == false) {
        masterPosts = allPosts;
        set = true;
    }

    // For each post...
    for (var a = 0; a < masterPosts.length; a++) {
        //For each post tag...
        var tagCount = 0;
        for (var j = 0; j < postTags.length; j++) {
            // If a tag is equal to the one clicked, add the post of that tag to an array.
            if (postTags[j].innerHTML == activeFilters[a]) {
                
            }
        }
    }

    console.log(showPosts);
    
    // Determine visibility of all posts
    for (var k = 0; k < masterPosts.length; k++) {
        console.log(allPosts[k]);
        if (contains.call(showPosts, masterPosts[k]) != true) {
            masterPosts[k].style.display = "none";
            console.log("none");
        }
        else {
            masterPosts[k].style.display = "flex";
            console.log("flex");
        }
    }
}

function clearFilters() {
    for (var k = 0; k < masterPosts.length; k++) {
        masterPosts[k].style.display = "flex";
    }
    document.getElementById('filterList').innerHTML = "Click on a tag to filter.";
    activeFilters = [];
}

var contains = function(needle) {
    // Per spec, the way to identify NaN is that it is not equal to itself
    var findNaN = needle !== needle;
    var indexOf;

    if(!findNaN && typeof Array.prototype.indexOf === 'function') {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function(needle) {
            var i = -1, index = -1;

            for(i = 0; i < this.length; i++) {
                var item = this[i];

                if((findNaN && item !== item) || item === needle) {
                    index = i;
                    break;
                }
            }

            return index;
        };
    }

    return indexOf.call(this, needle) > -1;
};