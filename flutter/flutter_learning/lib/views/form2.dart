import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';

class FormTwo extends StatefulWidget {
  const FormTwo({super.key});
  static const path = '/form_two';

  @override
  State<StatefulWidget> createState() => _FormTwo();
}

class _FormTwo extends State<FormTwo> {
  final _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('form'),
        centerTitle: true,
      ),
      body: FormBuilder(
        key: _formKey,
        child: Column(
          children: [
            FormBuilderTextField(
              name: 'text',
              onChanged: (val) {
                print(val); // Print the text value write into TextField
              },
            ),
            FormBuilderTextField(
              name: 'email',
              decoration: const InputDecoration(labelText: 'Email'),
            ),
            FormBuilderRadioGroup(
              decoration: InputDecoration(labelText: 'My best language'),
              name: 'my_language',
              options: [
                'Dart',
                'Kotlin',
                'Java',
                'Swift',
                'Objective-C',
                'Other'
              ]
                  .map((lang) => FormBuilderFieldOption(value: lang))
                  .toList(growable: false),
            ),
            FormBuilderTextField(
              name: 'specify',
              decoration:
                  const InputDecoration(labelText: 'If Other, please specify'),
              validator: (val) {},
            ),
          ],
        ),
      ),
    );
  }
}
