// Theme data derived from:
// https://github.com/microsoft/vscode/raw/a716714a88891cad69c0753fb95923870df295f5/extensions/theme-defaults/themes/dark_plus.json

// This satisfies the contract of IRawTheme as defined in vscode-textmate.
export default {
  name: 'vs-dark',
  settings: [
    {
      settings: {
        foreground: '#f6f6f4',
        background: '#1e293b',
      },
    },
    {
      scope: [
        'emphasis',
      ],
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      scope: [
        'strong',
      ],
      settings: {
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'header',
      ],
      settings: {
        foreground: '#BF9EEE',
      },
    },
    {
      scope: [
        'meta.diff',
        'meta.diff.header',
      ],
      settings: {
        foreground: '#7B7F8B',
      },
    },
    {
      scope: [
        'markup.inserted',
      ],
      settings: {
        foreground: '#62E884',
      },
    },
    {
      scope: [
        'markup.deleted',
      ],
      settings: {
        foreground: '#EE6666',
      },
    },
    {
      scope: [
        'markup.changed',
      ],
      settings: {
        foreground: '#FFB86C',
      },
    },
    {
      scope: [
        'invalid',
      ],
      settings: {
        foreground: '#EE6666',
        fontStyle: 'underline italic',
      },
    },
    {
      scope: [
        'invalid.deprecated',
      ],
      settings: {
        foreground: '#F6F6F4',
        fontStyle: 'underline italic',
      },
    },
    {
      scope: [
        'entity.name.filename',
      ],
      settings: {
        foreground: '#E7EE98',
      },
    },
    {
      scope: [
        'markup.error',
      ],
      settings: {
        foreground: '#EE6666',
      },
    },
    {
      scope: [
        'markup.underline',
      ],
      settings: {
        fontStyle: 'underline',
      },
    },
    {
      scope: [
        'markup.bold',
      ],
      settings: {
        foreground: '#FFB86C',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'markup.heading',
      ],
      settings: {
        foreground: '#BF9EEE',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'markup.italic',
      ],
      settings: {
        foreground: '#E7EE98',
        fontStyle: 'italic',
      },
    },
    {
      scope: [
        'beginning.punctuation.definition.list.markdown',
        'beginning.punctuation.definition.quote.markdown',
        'punctuation.definition.link.restructuredtext',
      ],
      settings: {
        foreground: '#97E1F1',
      },
    },
    {
      scope: [
        'markup.inline.raw',
        'markup.raw.restructuredtext',
      ],
      settings: {
        foreground: '#62E884',
      },
    },
    {
      scope: [
        'markup.underline.link',
        'markup.underline.link.image',
      ],
      settings: {
        foreground: '#97E1F1',
      },
    },
    {
      scope: [
        'meta.link.reference.def.restructuredtext',
        'punctuation.definition.directive.restructuredtext',
        'string.other.link.description',
        'string.other.link.title',
      ],
      settings: {
        foreground: '#F286C4',
      },
    },
    {
      scope: [
        'entity.name.directive.restructuredtext',
        'markup.quote',
      ],
      settings: {
        foreground: '#E7EE98',
        fontStyle: 'italic',
      },
    },
    {
      scope: [
        'meta.separator.markdown',
      ],
      settings: {
        foreground: '#7B7F8B',
      },
    },
    {
      scope: [
        'fenced_code.block.language',
        'markup.raw.inner.restructuredtext',
        'markup.fenced_code.block.markdown punctuation.definition.markdown',
      ],
      settings: {
        foreground: '#62E884',
      },
    },
    {
      scope: [
        'punctuation.definition.constant.restructuredtext',
      ],
      settings: {
        foreground: '#BF9EEE',
      },
    },
    {
      scope: [
        'markup.heading.markdown punctuation.definition.string.begin',
        'markup.heading.markdown punctuation.definition.string.end',
      ],
      settings: {
        foreground: '#BF9EEE',
      },
    },
    {
      scope: [
        'meta.paragraph.markdown punctuation.definition.string.begin',
        'meta.paragraph.markdown punctuation.definition.string.end',
      ],
      settings: {
        foreground: '#F6F6F4',
      },
    },
    {
      scope: [
        'markup.quote.markdown meta.paragraph.markdown punctuation.definition.string.begin',
        'markup.quote.markdown meta.paragraph.markdown punctuation.definition.string.end',
      ],
      settings: {
        foreground: '#E7EE98',
      },
    },
    {
      scope: [
        'entity.name.type.class',
        'entity.name.class',
      ],
      settings: {
        foreground: '#97E1F1',
        fontStyle: 'normal',
      },
    },
    {
      scope: [
        'keyword.expressions-and-types.swift',
        'keyword.other.this',
        'variable.language',
        'variable.language punctuation.definition.variable.php',
        'variable.other.readwrite.instance.ruby',
        'variable.parameter.function.language.special',
      ],
      settings: {
        foreground: '#BF9EEE',
        fontStyle: 'italic',
      },
    },
    {
      scope: [
        'entity.other.inherited-class',
      ],
      settings: {
        foreground: '#97E1F1',
        fontStyle: 'italic',
      },
    },
    {
      scope: [
        'comment',
        'punctuation.definition.comment',
        'unused.comment',
        'wildcard.comment',
      ],
      settings: {
        foreground: '#7B7F8B',
      },
    },
    {
      scope: [
        'comment keyword.codetag.notation',
        'comment.block.documentation keyword',
        'comment.block.documentation storage.type.class',
      ],
      settings: {
        foreground: '#F286C4',
      },
    },
    {
      scope: [
        'comment.block.documentation entity.name.type',
      ],
      settings: {
        foreground: '#97E1F1',
        fontStyle: 'italic',
      },
    },
    {
      scope: [
        'comment.block.documentation entity.name.type punctuation.definition.bracket',
      ],
      settings: {
        foreground: '#97E1F1',
      },
    },
    {
      scope: [
        'comment.block.documentation variable',
      ],
      settings: {
        foreground: '#FFB86C',
        fontStyle: 'italic',
      },
    },
    {
      scope: [
        'constant',
        'variable.other.constant',
      ],
      settings: {
        foreground: '#BF9EEE',
      },
    },
    {
      scope: [
        'constant.character.escape',
        'constant.character.string.escape',
        'constant.regexp',
      ],
      settings: {
        foreground: '#F286C4',
      },
    },
    {
      scope: [
        'entity.name.tag',
      ],
      settings: {
        foreground: '#F286C4',
      },
    },
    {
      scope: [
        'entity.other.attribute-name.parent-selector',
      ],
      settings: {
        foreground: '#F286C4',
      },
    },
    {
      scope: [
        'entity.other.attribute-name',
      ],
      settings: {
        foreground: '#62E884',
        fontStyle: 'italic',
      },
    },
    {
      scope: [
        'entity.name.function',
        'meta.function-call.object',
        'meta.function-call.php',
        'meta.function-call.static',
        'meta.method-call.java meta.method',
        'meta.method.groovy',
        'support.function.any-method.lua',
        'keyword.operator.function.infix',
      ],
      settings: {
        foreground: '#62E884',
      },
    },
    {
      scope: [
        'entity.name.variable.parameter',
        'meta.at-rule.function variable',
        'meta.at-rule.mixin variable',
        'meta.function.arguments variable.other.php',
        'meta.selectionset.graphql meta.arguments.graphql variable.arguments.graphql',
        'variable.parameter',
      ],
      settings: {
        foreground: '#FFB86C',
        fontStyle: 'italic',
      },
    },
    {
      scope: [
        'meta.decorator variable.other.readwrite',
        'meta.decorator variable.other.property',
      ],
      settings: {
        foreground: '#62E884',
        fontStyle: 'italic',
      },
    },
    {
      scope: [
        'meta.decorator variable.other.object',
      ],
      settings: {
        foreground: '#62E884',
      },
    },
    {
      scope: [
        'keyword',
        'punctuation.definition.keyword',
      ],
      settings: {
        foreground: '#F286C4',
      },
    },
    {
      scope: [
        'keyword.control.new',
        'keyword.operator.new',
      ],
      settings: {
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'meta.selector',
      ],
      settings: {
        foreground: '#F286C4',
      },
    },
    {
      scope: [
        'support',
      ],
      settings: {
        foreground: '#97E1F1',
        fontStyle: 'italic',
      },
    },
    {
      scope: [
        'support.function.magic',
        'support.variable',
        'variable.other.predefined',
      ],
      settings: {
        foreground: '#BF9EEE',
        fontStyle: 'regular',
      },
    },
    {
      scope: [
        'support.function',
        'support.type.property-name',
      ],
      settings: {
        fontStyle: 'regular',
      },
    },
    {
      scope: [
        'constant.other.symbol.hashkey punctuation.definition.constant.ruby',
        'entity.other.attribute-name.placeholder punctuation',
        'entity.other.attribute-name.pseudo-class punctuation',
        'entity.other.attribute-name.pseudo-element punctuation',
        'meta.group.double.toml',
        'meta.group.toml',
        'meta.object-binding-pattern-variable punctuation.destructuring',
        'punctuation.colon.graphql',
        'punctuation.definition.block.scalar.folded.yaml',
        'punctuation.definition.block.scalar.literal.yaml',
        'punctuation.definition.block.sequence.item.yaml',
        'punctuation.definition.entity.other.inherited-class',
        'punctuation.function.swift',
        'punctuation.separator.dictionary.key-value',
        'punctuation.separator.hash',
        'punctuation.separator.inheritance',
        'punctuation.separator.key-value',
        'punctuation.separator.key-value.mapping.yaml',
        'punctuation.separator.namespace',
        'punctuation.separator.pointer-access',
        'punctuation.separator.slice',
        'string.unquoted.heredoc punctuation.definition.string',
        'support.other.chomping-indicator.yaml',
        'punctuation.separator.annotation',
      ],
      settings: {
        foreground: '#F286C4',
      },
    },
    {
      scope: [
        'keyword.operator.other.powershell',
        'keyword.other.statement-separator.powershell',
        'meta.brace.round',
        'meta.function-call punctuation',
        'punctuation.definition.arguments.begin',
        'punctuation.definition.arguments.end',
        'punctuation.definition.entity.begin',
        'punctuation.definition.entity.end',
        'punctuation.definition.tag.cs',
        'punctuation.definition.type.begin',
        'punctuation.definition.type.end',
        'punctuation.section.scope.begin',
        'punctuation.section.scope.end',
        'punctuation.terminator.expression.php',
        'storage.type.generic.java',
        'string.template meta.brace',
        'string.template punctuation.accessor',
      ],
      settings: {
        foreground: '#F6F6F4',
      },
    },
    {
      scope: [
        'meta.string-contents.quoted.double punctuation.definition.variable',
        'punctuation.definition.interpolation.begin',
        'punctuation.definition.interpolation.end',
        'punctuation.definition.template-expression.begin',
        'punctuation.definition.template-expression.end',
        'punctuation.section.embedded.begin',
        'punctuation.section.embedded.coffee',
        'punctuation.section.embedded.end',
        'punctuation.section.embedded.end source.php',
        'punctuation.section.embedded.end source.ruby',
        'punctuation.definition.variable.makefile',
      ],
      settings: {
        foreground: '#F286C4',
      },
    },
    {
      scope: [
        'entity.name.function.target.makefile',
        'entity.name.section.toml',
        'entity.name.tag.yaml',
        'variable.other.key.toml',
      ],
      settings: {
        foreground: '#97E1F1',
      },
    },
    {
      scope: [
        'constant.other.date',
        'constant.other.timestamp',
      ],
      settings: {
        foreground: '#FFB86C',
      },
    },
    {
      scope: [
        'variable.other.alias.yaml',
      ],
      settings: {
        foreground: '#62E884',
        fontStyle: 'italic underline',
      },
    },
    {
      scope: [
        'storage',
        'meta.implementation storage.type.objc',
        'meta.interface-or-protocol storage.type.objc',
        'source.groovy storage.type.def',
      ],
      settings: {
        foreground: '#F286C4',
        fontStyle: 'regular',
      },
    },
    {
      scope: [
        'entity.name.type',
        'keyword.primitive-datatypes.swift',
        'keyword.type.cs',
        'meta.protocol-list.objc',
        'meta.return-type.objc',
        'source.go storage.type',
        'source.groovy storage.type',
        'source.java storage.type',
        'source.powershell entity.other.attribute-name',
        'storage.class.std.rust',
        'storage.type.attribute.swift',
        'storage.type.c',
        'storage.type.core.rust',
        'storage.type.cs',
        'storage.type.groovy',
        'storage.type.objc',
        'storage.type.php',
        'storage.type.haskell',
        'storage.type.ocaml',
      ],
      settings: {
        foreground: '#97E1F1',
        fontStyle: 'italic',
      },
    },
    {
      scope: [
        'entity.name.type.type-parameter',
        'meta.indexer.mappedtype.declaration entity.name.type',
        'meta.type.parameters entity.name.type',
      ],
      settings: {
        foreground: '#FFB86C',
      },
    },
    {
      scope: [
        'storage.modifier',
      ],
      settings: {
        foreground: '#F286C4',
      },
    },
    {
      scope: [
        'string.regexp',
        'constant.other.character-class.set.regexp',
        'constant.character.escape.backslash.regexp',
      ],
      settings: {
        foreground: '#E7EE98',
      },
    },
    {
      scope: [
        'punctuation.definition.group.capture.regexp',
      ],
      settings: {
        foreground: '#F286C4',
      },
    },
    {
      scope: [
        'string.regexp punctuation.definition.string.begin',
        'string.regexp punctuation.definition.string.end',
      ],
      settings: {
        foreground: '#EE6666',
      },
    },
    {
      scope: [
        'punctuation.definition.character-class.regexp',
      ],
      settings: {
        foreground: '#97E1F1',
      },
    },
    {
      scope: [
        'punctuation.definition.group.regexp',
      ],
      settings: {
        foreground: '#FFB86C',
      },
    },
    {
      scope: [
        'punctuation.definition.group.assertion.regexp',
        'keyword.operator.negation.regexp',
      ],
      settings: {
        foreground: '#EE6666',
      },
    },
    {
      scope: [
        'meta.assertion.look-ahead.regexp',
      ],
      settings: {
        foreground: '#62E884',
      },
    },
    {
      scope: [
        'string',
      ],
      settings: {
        foreground: '#E7EE98',
      },
    },
    {
      scope: [
        'punctuation.definition.string.begin',
        'punctuation.definition.string.end',
      ],
      settings: {
        foreground: '#DEE492',
      },
    },
    {
      scope: [
        'punctuation.support.type.property-name.begin',
        'punctuation.support.type.property-name.end',
      ],
      settings: {
        foreground: '#97E2F2',
      },
    },
    {
      scope: [
        'string.quoted.docstring.multi',
        'string.quoted.docstring.multi.python punctuation.definition.string.begin',
        'string.quoted.docstring.multi.python punctuation.definition.string.end',
        'string.quoted.docstring.multi.python constant.character.escape',
      ],
      settings: {
        foreground: '#7B7F8B',
      },
    },
    {
      scope: [
        'variable',
        'constant.other.key.perl',
        'support.variable.property',
        'variable.other.constant.js',
        'variable.other.constant.ts',
        'variable.other.constant.tsx',
      ],
      settings: {
        foreground: '#F6F6F4',
      },
    },
    {
      scope: [
        'meta.import variable.other.readwrite',
        'meta.variable.assignment.destructured.object.coffee variable',
      ],
      settings: {
        foreground: '#FFB86C',
        fontStyle: 'italic',
      },
    },
    {
      scope: [
        'meta.import variable.other.readwrite.alias',
        'meta.export variable.other.readwrite.alias',
        'meta.variable.assignment.destructured.object.coffee variable variable',
      ],
      settings: {
        foreground: '#F6F6F4',
        fontStyle: 'normal',
      },
    },
    {
      scope: [
        'meta.selectionset.graphql variable',
      ],
      settings: {
        foreground: '#E7EE98',
      },
    },
    {
      scope: [
        'meta.selectionset.graphql meta.arguments variable',
      ],
      settings: {
        foreground: '#F6F6F4',
      },
    },
    {
      scope: [
        'entity.name.fragment.graphql',
        'variable.fragment.graphql',
      ],
      settings: {
        foreground: '#97E1F1',
      },
    },
    {
      scope: [
        'constant.other.symbol.hashkey.ruby',
        'keyword.operator.dereference.java',
        'keyword.operator.navigation.groovy',
        'meta.scope.for-loop.shell punctuation.definition.string.begin',
        'meta.scope.for-loop.shell punctuation.definition.string.end',
        'meta.scope.for-loop.shell string',
        'storage.modifier.import',
        'punctuation.section.embedded.begin.tsx',
        'punctuation.section.embedded.end.tsx',
        'punctuation.section.embedded.begin.jsx',
        'punctuation.section.embedded.end.jsx',
        'punctuation.separator.list.comma.css',
        'constant.language.empty-list.haskell',
      ],
      settings: {
        foreground: '#F6F6F4',
      },
    },
    {
      scope: [
        'source.shell variable.other',
      ],
      settings: {
        foreground: '#BF9EEE',
      },
    },
    {
      scope: [
        'support.constant',
      ],
      settings: {
        foreground: '#BF9EEE',
        fontStyle: 'normal',
      },
    },
    {
      scope: [
        'meta.scope.prerequisites.makefile',
      ],
      settings: {
        foreground: '#E7EE98',
      },
    },
    {
      scope: [
        'meta.attribute-selector.scss',
      ],
      settings: {
        foreground: '#E7EE98',
      },
    },
    {
      scope: [
        'punctuation.definition.attribute-selector.end.bracket.square.scss',
        'punctuation.definition.attribute-selector.begin.bracket.square.scss',
      ],
      settings: {
        foreground: '#F6F6F4',
      },
    },
    {
      scope: [
        'meta.preprocessor.haskell',
      ],
      settings: {
        foreground: '#7B7F8B',
      },
    },
    {
      scope: [
        'log.error',
      ],
      settings: {
        foreground: '#EE6666',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'log.warning',
      ],
      settings: {
        foreground: '#E7EE98',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'comment',
        'keyword',
        'storage',
        'keyword.control.import',
        'keyword.control.default',
        'keyword.control.from',
        'keyword.operator.new',
        'keyword.control.export',
        'keyword.control.flow',
        'storage.type.class',
        'storage.type.function',
        'storage.type',
        'storage.type.class',
        'variable.language',
        'variable.language.super',
        'variable.language.this',
        'meta.class',
        'meta.var.expr',
        'constant.language.null',
        'support.type.primitive',
        'entity.name.method.js',
        'entity.other.attribute-name',
        'punctuation.definition.comment',
        'text.html.basic entity.other.attribute-name.html',
        'text.html.basic entity.other.attribute-name',
        'tag.decorator.js entity.name.tag.js',
        'tag.decorator.js punctuation.definition.tag.js',
        'source.js constant.other.object.key.js string.unquoted.label.js',
      ],
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      scope: 'token.info-token',
      settings: {
        foreground: '#6796E6',
      },
    },
    {
      scope: 'token.warn-token',
      settings: {
        foreground: '#CD9731',
      },
    },
    {
      scope: 'token.error-token',
      settings: {
        foreground: '#F44747',
      },
    },
    {
      scope: 'token.debug-token',
      settings: {
        foreground: '#B267E6',
      },
    },
  ],
}
