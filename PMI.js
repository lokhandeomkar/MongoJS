var PMI_Map_1 = function() {

    Array.prototype.contains = function(obj) 
    {
        var i = this.length;
        if (i == 0)
        {    
            return false;
        }
        while (i--) 
        {
            if (this[i] === obj) 
            {
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
    var pairs = [];
    var words = [];
    var ind_arr = [];

    var additionalInfo = this.additionalInfo;
    if (additionalInfo.length > 0) 
    {
        // iterate over words in a document
        additionalInfo_worded = additionalInfo.split(" ");
        
        for (wordIndex = 0; wordIndex < additionalInfo_worded.length; wordIndex++){
            additionalInfo_worded[wordIndex] = additionalInfo_worded[wordIndex].toLowerCase();
            additionalInfo_worded[wordIndex] = additionalInfo_worded[wordIndex].replace(/\W/g, "");
            var word = additionalInfo_worded[wordIndex];
            if (stopwords.contains(word) || swords.contains(word) || word=="" || word==" ")
            {
                ind_arr.push(wordIndex);
            }
        }

        new_add = [];
        for (wordIndex = 0; wordIndex < additionalInfo_worded.length; wordIndex++){
            if ( ! ind_arr.contains(wordIndex)) {
                new_add.push(additionalInfo_worded[wordIndex]);
            }
        }
        
        for (wordIndex = 0; wordIndex < new_add.length; wordIndex++) 
        {   
            var word = new_add[wordIndex]; 
            // word counts in this document
            if (word in mp)
            {
                var x = parseInt(mp[word] , 10);
                x = x + 1;
                mp[word] = x.toString();
            }
            else
            {
                mp[word] = "1";
                words.push(word);
            }
            
            if (wordIndex < new_add.length-1)
            {
                var wordnext = new_add[wordIndex+1]; //lowercasing
                pairs.push(word+"&"+wordnext); // making pairs
            }
        }
    }

    //var keys = my.keys();
    if (pairs.length > 0)
    {
        for (i=0; i < pairs.length; i++)
        {
            pairwords = pairs[i].split("&"); 
            // value is a dictionary for every pair of words in that document,
            // the dictionary consists of the document ID, and counts for the words in that pair for the current document, all made into arrays 
            emit (pairs[i], "1");
        }    
    }

    for (i=0; i < words.length; i++)
    {
        emit(words[i]+"&"+"$" , (parseInt(mp[words[i]] , 10)).toString());
    }

};

var PMI_Reduce_1 = function(key, values){
    var sum=0;
    for ( i = 0; i < values.length; i++)
    {
        sum = sum + parseInt(values[i],10) ;
    }
    return sum.toString(); 
};

var PMI_Map_2 = function(){
    
    var in_key = this._id;
    var in_key_arr = in_key.split("&");
    var dict = {"int_key" : [in_key], "int_val" : [this.value]};

    if (in_key_arr[1]=="$")
    {
        emit(in_key_arr[0] , dict);   
    }
    else 
    {
        emit(in_key_arr[0] , dict);
        emit(in_key_arr[1] , dict);
    }    
};

var PMI_Reduce_2 = function(key, values){
   // values is an array of dictionaries with fields "int_key" and "int_val"
   var dict = {"int_key" : [], "int_val" : []};
   for ( i = 0; i < values.length; i++)
   {
        dict.int_key = dict.int_key.concat(values[i].int_key);
        dict.int_val = dict.int_val.concat(values[i].int_val);
   }
   return dict;
};

var PMI_Map_3 = function(){
    if (this.value.int_key.length > 1){
        for (i=1; i<this.value.int_key.length; i++){
            emit(this.value.int_key[i],{"word_cnt" : this.value.int_val[0], "joint_cnt" : this.value.int_val[i]});
        }
    }    
};

var PMI_Reduce_3 = function(key, values){
   var PMI = Math.log(parseInt(values[0].joint_cnt,10)/(parseInt(values[0].word_cnt,10)*parseInt(values[1].word_cnt,10)));
   return PMI;
};