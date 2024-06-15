set -o errexit  # exit on error
python -m pip install --upgrade pip
pip3 install -r requirements.txt

python manage.py collectstatic --no-input
python manage.py migrate