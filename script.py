import json
import rdflib
from RDFClosure import DeductiveClosure, OWLRL_Extension

g = rdflib.Graph()
g.parse('pedigree.n3', format='turtle')
FHKB = rdflib.Namespace("http://www.example.com/genealogy.owl#")

for i in g:
    print i
