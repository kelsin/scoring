import compose from 'ramda/es/compose';
import concat from 'ramda/es/concat';
import converge from 'ramda/es/converge';
import head from 'ramda/es/head';
import join from 'ramda/es/join';
import map from 'ramda/es/map';
import replace from 'ramda/es/replace';
import split from 'ramda/es/split';
import tail from 'ramda/es/tail';
import toUpper from 'ramda/es/toUpper';

const capitalize = converge(concat(),
                            [compose(toUpper, head), tail]);

const titleize = compose(join(' '),
                         map(capitalize),
                         split(' '),
                         replace(/[-_]/, ' '));

export { capitalize, titleize };
