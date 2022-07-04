function enough(cap, on, wait) {
    let busCapacity = cap - on
      if(busCapacity >= wait){
        return 0
      } else {
        return (wait - (cap-on))
      }
}