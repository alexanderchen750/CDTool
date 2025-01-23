from flask import Flask, request, jsonify
from lark import Lark, Tree

app = Flask(__name__)

# expression EBNF
DEFAULT_GRAMMAR = """
    start: expression
    expression: expression ("+" | "-") term  -> binary_op
            | term
    term: term ("*" | "/") factor           -> binary_op
        | factor
    factor: NUMBER                          -> number
        | "(" expression ")"              -> parens
    NUMBER: /[0-9]+/
    %ignore /\s+/  # Ignore whitespace

"""
#convert tree to dict(json)
def tree_to_dict(tree):
    return {
        'name': tree.data,  # Rule name (e.g., 'expression', 'term')
        'children': [tree_to_dict(child) if isinstance(child, Tree) else {'name': str(child)}
                     for child in tree.children],
    }

@app.route('/parse', methods=['POST'])
def parse():
    # Get JSON data from the request
    data = request.json
    grammar = data.get('grammar', DEFAULT_GRAMMAR)  # Use provided grammar or default
    input_text = data.get('input', '')  # Get input text to parse

    # Create the Lark parser
    try:
        parser = Lark(grammar, start="start")
        tree = parser.parse(input_text)
        return jsonify({
            'status': 'success',
            'parse_tree': tree_to_dict(tree),
        })
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e),
        }), 400

if __name__ == '__main__':
    app.run(debug=True)