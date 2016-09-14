/*

{"_id" : "", "value" : 1989283 }
{ "_id" : "and", "value" : 506787 }
{ "_id" : "•", "value" : 408648 }
{ "_id" : "of", "value" : 163303 }
{ "_id" : "to", "value" : 162016 }
{ "_id" : "in", "value" : 158399 }
{ "_id" : "with", "value" : 101695 }
{ "_id" : "the", "value" : 94832 }
{ "_id" : "a", "value" : 74968 }
{ "_id" : "Microsoft", "value" : 70088 }
{ "_id" : "for", "value" : 67039 }
{ "_id" : "&", "value" : 58095 }
{ "_id" : "-", "value" : 57546 }
{ "_id" : "*", "value" : 56122 }
{ "_id" : "Skills", "value" : 44264 }
{ "_id" : "skills", "value" : 43564 }
{ "_id" : "I", "value" : 38993 }
{ "_id" : "as", "value" : 37520 }
{ "_id" : "SKILLS", "value" : 34775 }
{ "_id" : "Office", "value" : 32953 }

*/

var MyMap = function() {

    Array.prototype.contains = function(obj) {
        var i = this.length;
        while (i--) {
            if (this[i] === obj) {
                return true;
            }
        }
        return false;
    }
	
	//var stopwords = [".", ",", "?", "!", "'", "\"", "''", "`", "``", "*", "-", "/", "+", "a", "about", "above", "according", "across", "after", "afterwards", "again", "against", "albeit", "all", "almost", "alone", "along", "already", "also", "although", "always", "am", "among", "amongst", "an", "and", "another", "any", "anybody", "anyhow", "anyone", "anything", "anyway", "anywhere", "apart", "are", "around", "as", "at", "av", "be", "became", "because", "become", "becomes", "becoming", "been", "before", "beforehand", "behind", "being", "below", "beside", "besides", "between", "beyond", "both", "but", "by", "can", "cannot", "canst", "certain", "cf", "choose", "contrariwise", "cos", "could", "cu", "day", "do", "does", "doesn't", "doing", "dost", "doth", "double", "down", "dual", "during", "each", "either", "else", "elsewhere", "enough", "et", "etc", "even", "ever", "every", "everybody", "everyone", "everything", "everywhere", "except", "excepted", "excepting", "exception", "exclude", "excluding", "exclusive", "far", "farther", "farthest", "few", "ff", "first", "for", "formerly", "forth", "forward", "from", "front", "further", "furthermore", "furthest", "get", "go", "had", "halves", "hardly", "has", "hast", "hath", "have", "he", "hence", "henceforth", "her", "here", "hereabouts", "hereafter", "hereby", "herein", "hereto", "hereupon", "hers", "herself", "him", "himself", "hindmost", "his", "hither", "hitherto", "how", "however", "howsoever", "i", "ie", "if", "in", "inasmuch", "inc", "include", "included", "including", "indeed", "indoors", "inside", "insomuch", "instead", "into", "inward", "inwards", "is", "it", "its", "itself", "just", "kind", "kg", "km", "last", "latter", "latterly", "less", "lest", "let", "like", "little", "ltd", "many", "may", "maybe", "me", "meantime", "meanwhile", "might", "moreover", "most", "mostly", "more", "mr", "mrs", "ms", "much", "must", "my", "myself", "namely", "need", "neither", "never", "nevertheless", "next", "no", "nobody", "none", "nonetheless", "noone", "nope", "nor", "not", "nothing", "notwithstanding", "now", "nowadays", "nowhere", "of", "off", "often", "ok", "on", "once", "one", "only", "onto", "or", "other", "others", "otherwise", "ought", "our", "ours", "ourselves", "out", "outside", "over", "own", "per", "perhaps", "plenty", "provide", "quite", "rather", "really", "round", "said", "sake", "same", "sang", "save", "saw", "see", "seeing", "seem", "seemed", "seeming", "seems", "seen", "seldom", "selves", "sent", "several", "shalt", "she", "should", "shown", "sideways", "since", "slept", "slew", "slung", "slunk", "smote", "so", "some", "somebody", "somehow", "someone", "something", "sometime", "sometimes", "somewhat", "somewhere", "spake", "spat", "spoke", "spoken", "sprang", "sprung", "stave", "staves", "still", "such", "supposing", "than", "that", "the", "thee", "their", "them", "themselves", "then", "thence", "thenceforth", "there", "thereabout", "thereabouts", "thereafter", "thereby", "therefore", "therein", "thereof", "thereon", "thereto", "thereupon", "these", "they", "this", "those", "thou", "though", "thrice", "through", "throughout", "thru", "thus", "thy", "thyself", "till", "to", "together", "too", "toward", "towards", "ugh", "unable", "under", "underneath", "unless", "unlike", "until", "up", "upon", "upward", "upwards", "us", "use", "used", "using", "very", "via", "vs", "want", "was", "we", "week", "well", "were", "what", "whatever", "whatsoever", "when", "whence", "whenever", "whensoever", "where", "whereabouts", "whereafter", "whereas", "whereat", "whereby", "wherefore", "wherefrom", "wherein", "whereinto", "whereof", "whereon", "wheresoever", "whereto", "whereunto", "whereupon", "wherever", "wherewith", "whether", "whew", "which", "whichever", "whichsoever", "while", "whilst", "whither", "who", "whoa", "whoever", "whole", "whom", "whomever", "whomsoever", "whose", "whosoever", "why", "will", "wilt", "with", "within", "without", "worse", "worst", "would", "wow", "ye", "yet", "year", "yippee", "you", "your", "yours", "yourself", "yourselves", "Status"];
    var stopwords = ["a", "about", "above", "according", "across", "after", "afterwards", "again", "against", "albeit", "all", "almost", "alone", "along", "already", "also", "although", "always", "am", "among", "amongst", "an", "and", "another", "any", "anybody", "anyhow", "anyone", "anything", "anyway", "anywhere", "apart", "are", "around", "as", "at", "av", "be", "became", "because", "become", "becomes", "becoming", "been", "before", "beforehand", "behind", "being", "below", "beside", "besides", "between", "beyond", "both", "but", "by", "can", "cannot", "canst", "certain", "cf", "choose", "contrariwise", "cos", "could", "cu", "day", "do", "does", "doesn't", "doing", "dost", "doth", "double", "down", "dual", "during", "each", "either", "else", "elsewhere", "enough", "et", "etc", "even", "ever", "every", "everybody", "everyone", "everything", "everywhere", "except", "excepted", "excepting", "exception", "exclude", "excluding", "exclusive", "far", "farther", "farthest", "few", "ff", "first", "for", "formerly", "forth", "forward", "from", "front", "further", "furthermore", "furthest", "get", "go", "had", "halves", "hardly", "has", "hast", "hath", "have", "he", "hence", "henceforth", "her", "here", "hereabouts", "hereafter", "hereby", "herein", "hereto", "hereupon", "hers", "herself", "him", "himself", "hindmost", "his", "hither", "hitherto", "how", "however", "howsoever", "i", "ie", "if", "in", "inasmuch", "inc", "include", "included", "including", "indeed", "indoors", "inside", "insomuch", "instead", "into", "inward", "inwards", "is", "it", "its", "itself", "just", "kind", "kg", "km", "last", "latter", "latterly", "less", "lest", "let", "like", "little", "ltd", "many", "may", "maybe", "me", "meantime", "meanwhile", "might", "moreover", "most", "mostly", "more", "mr", "mrs", "ms", "much", "must", "my", "myself", "namely", "need", "neither", "never", "nevertheless", "next", "no", "nobody", "none", "nonetheless", "noone", "nope", "nor", "not", "nothing", "notwithstanding", "now", "nowadays", "nowhere", "of", "off", "often", "ok", "on", "once", "one", "only", "onto", "or", "other", "others", "otherwise", "ought", "our", "ours", "ourselves", "out", "outside", "over", "own", "per", "perhaps", "plenty", "provide", "quite", "rather", "really", "round", "said", "sake", "same", "sang", "save", "saw", "see", "seeing", "seem", "seemed", "seeming", "seems", "seen", "seldom", "selves", "sent", "several", "shalt", "she", "should", "shown", "sideways", "since", "slept", "slew", "slung", "slunk", "smote", "so", "some", "somebody", "somehow", "someone", "something", "sometime", "sometimes", "somewhat", "somewhere", "spake", "spat", "spoke", "spoken", "sprang", "sprung", "stave", "staves", "still", "such", "supposing", "than", "that", "the", "thee", "their", "them", "themselves", "then", "thence", "thenceforth", "there", "thereabout", "thereabouts", "thereafter", "thereby", "therefore", "therein", "thereof", "thereon", "thereto", "thereupon", "these", "they", "this", "those", "thou", "though", "thrice", "through", "throughout", "thru", "thus", "thy", "thyself", "till", "to", "together", "too", "toward", "towards", "ugh", "unable", "under", "underneath", "unless", "unlike", "until", "up", "upon", "upward", "upwards", "us", "use", "used", "using", "very", "via", "vs", "want", "was", "we", "week", "well", "were", "what", "whatever", "whatsoever", "when", "whence", "whenever", "whensoever", "where", "whereabouts", "whereafter", "whereas", "whereat", "whereby", "wherefore", "wherefrom", "wherein", "whereinto", "whereof", "whereon", "wheresoever", "whereto", "whereunto", "whereupon", "wherever", "wherewith", "whether", "whew", "which", "whichever", "whichsoever", "while", "whilst", "whither", "who", "whoa", "whoever", "whole", "whom", "whomever", "whomsoever", "whose", "whosoever", "why", "will", "wilt", "with", "within", "without", "worse", "worst", "would", "wow", "ye", "yet", "year", "yippee", "you", "your", "yours", "yourself", "yourselves", "Status"];
    var swords = ["$","-","•","[…]","●","&","",".", ",", "?", "!", "'", "''", "`", "``", "*", "-", "/", "+"];
    // var arr = ["I", "am"];
	
	var mp = {};
    var words = [];
    // get the additionalInfo attribute/field of the resume (it contains sentences with text)
    var additionalInfo = this.additionalInfo;
    // only do stuff if non-empty (has some words)
    if (additionalInfo.length > 0) 
    {
        // iterate over words in a document
        additionalInfo_worded = additionalInfo.split(" ");
        for (wordIndex = 0; wordIndex < additionalInfo_worded.length; wordIndex++) 
        {
            // send to the reducer(s) a tuple (word, 1)
            var word = additionalInfo_worded[wordIndex].toLowerCase(); //lowercasing
            word = word.replace(/\W/g, "");  
            if (! stopwords.contains(word) && ! swords.contains(word)) 
            { // removing stop words
                if (word in mp)
                {
                    var x = parseInt(mp[word] , 10);
                    x = x+1;
                    mp[word] = x.toString();
                }
                else
                {
                    mp[word] = "1";
                    words.push(word);
                }
        	}
        }	
    }

    //var keys = my.keys();
    for (i=0; i < words.length; i++)
    {
        emit(words[i] , parseInt(mp[words[i]] , 10));
    }    

};

var emit = function(key, value) {
    print("key: " + key + "  value: " + tojson(value));
};

var MyReduce = function(key, values) {
    var sum=0;
    for ( i = 0; i < values.length; i++)
    {
        sum = sum + +values[i];
    }
    return +sum; 
};


/*

{ "_id" : "skills", "value" : 3358 }
{ "_id" : "microsoft", "value" : 1642 }
{ "_id" : "management", "value" : 1481 }
{ "_id" : "office", "value" : 1187 }
{ "_id" : "excel", "value" : 1138 }
{ "_id" : "word", "value" : 983 }
{ "_id" : "sql", "value" : 903 }
{ "_id" : "experience", "value" : 865 }
{ "_id" : "server", "value" : 830 }
{ "_id" : "tools", "value" : 804 }
{ "_id" : "data", "value" : 785 }
{ "_id" : "project", "value" : 768 }
{ "_id" : "windows", "value" : 765 }
{ "_id" : "powerpoint", "value" : 753 }
{ "_id" : "technical", "value" : 747 }
{ "_id" : "business", "value" : 738 }
{ "_id" : "development", "value" : 649 }
{ "_id" : "proficient", "value" : 643 }
{ "_id" : "systems", "value" : 643 }
{ "_id" : "adobe", "value" : 642 }

*/

/*

I used stop word removal and converted all the words to lowercase.
Clearly, the words that were termed as frequent in the first example, were removed, due to them being stop words.
The counts for variations (combination of lowercase and uppercase letters) of words were effectively added together. x

*/