const data = [42, true, function() {return 'The meaning of life is: '}];
if (data[1]==true) {
    var res = data[2]
    console.log(res(), data[0])
}