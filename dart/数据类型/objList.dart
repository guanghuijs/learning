  main(){
    List list = <Map<String,dynamic>>[
      {
        'name':'wgh',
        'age': 18
      },
      {
        'name':'wgh',
        'age': 19
      },
      {
        'name':'wgh',
        'age': 20
      }
    ];

    print(list.indexOf({
      'name':'wgh',
      'age': 19
    }));

    print(list.map((e) => e.toString()).toList().indexOf({
      'name':'wgh',
      'age': 18
    }.toString()));
    print(list.asMap().entries.map((e) {
      final value = e.value;
      value['index'] = e.key;
      return value;
    }).toList());
  }

